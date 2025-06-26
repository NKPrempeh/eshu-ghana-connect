
-- Enable RLS on messages table
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow users to read messages where they are sender or recipient
CREATE POLICY "Users can read their own messages" ON messages
  FOR SELECT USING (
    auth.uid()::text = sender_id::text OR 
    auth.uid()::text = recipient_id::text
  );

-- Allow users to insert messages where they are the sender
CREATE POLICY "Users can send messages" ON messages
  FOR INSERT WITH CHECK (auth.uid()::text = sender_id::text);

-- Allow users to update their own sent messages
CREATE POLICY "Users can update their own messages" ON messages
  FOR UPDATE USING (auth.uid()::text = sender_id::text);

-- Allow users to delete their own sent messages
CREATE POLICY "Users can delete their own messages" ON messages
  FOR DELETE USING (auth.uid()::text = sender_id::text);
