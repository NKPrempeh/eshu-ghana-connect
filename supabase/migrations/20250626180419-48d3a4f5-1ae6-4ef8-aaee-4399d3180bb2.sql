
-- Update buddy_connections table to properly handle the request flow
ALTER TABLE buddy_connections 
ALTER COLUMN status SET DEFAULT 'pending';

-- Add a message column for users to include a message with their request
ALTER TABLE buddy_connections 
ADD COLUMN IF NOT EXISTS message TEXT;

-- Add timestamp for when request was created vs when it was accepted
ALTER TABLE buddy_connections 
ADD COLUMN IF NOT EXISTS requested_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Update created_at to be when the connection was accepted (if accepted)
ALTER TABLE buddy_connections 
ALTER COLUMN created_at DROP DEFAULT;

-- Enable RLS on buddy_connections table
ALTER TABLE buddy_connections ENABLE ROW LEVEL SECURITY;

-- Policy for users to create connection requests
CREATE POLICY "Users can create connection requests" 
ON buddy_connections 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy for users to view their own connection requests
CREATE POLICY "Users can view their own requests" 
ON buddy_connections 
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy for buddies to view requests sent to them
CREATE POLICY "Buddies can view requests sent to them" 
ON buddy_connections 
FOR SELECT 
USING (
  auth.uid() IN (
    SELECT user_id FROM buddy_profiles WHERE id = buddy_id
  )
);

-- Policy for buddies to update requests sent to them (accept/reject)
CREATE POLICY "Buddies can update requests sent to them" 
ON buddy_connections 
FOR UPDATE 
USING (
  auth.uid() IN (
    SELECT user_id FROM buddy_profiles WHERE id = buddy_id
  )
);

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_buddy_connections_buddy_id ON buddy_connections(buddy_id);
CREATE INDEX IF NOT EXISTS idx_buddy_connections_user_id ON buddy_connections(user_id);
CREATE INDEX IF NOT EXISTS idx_buddy_connections_status ON buddy_connections(status);

-- Enable realtime for buddy_connections
ALTER TABLE buddy_connections REPLICA IDENTITY FULL;

-- Add buddy_connections to realtime publication if not already added
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND tablename = 'buddy_connections'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE buddy_connections;
  END IF;
END $$;
