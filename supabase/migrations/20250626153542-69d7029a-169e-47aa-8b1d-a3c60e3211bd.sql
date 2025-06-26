
-- Check which buckets already exist and create only missing ones
DO $$
BEGIN
    -- Create event-images bucket if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'event-images') THEN
        INSERT INTO storage.buckets (id, name, public) VALUES ('event-images', 'event-images', true);
    END IF;
    
    -- Create gallery-images bucket if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'gallery-images') THEN
        INSERT INTO storage.buckets (id, name, public) VALUES ('gallery-images', 'gallery-images', true);
    END IF;
    
    -- Create user-avatars bucket if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'user-avatars') THEN
        INSERT INTO storage.buckets (id, name, public) VALUES ('user-avatars', 'user-avatars', true);
    END IF;
    
    -- Create buddy-avatars bucket if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'buddy-avatars') THEN
        INSERT INTO storage.buckets (id, name, public) VALUES ('buddy-avatars', 'buddy-avatars', true);
    END IF;
END $$;

-- Create policies only if they don't already exist
DO $$
BEGIN
    -- Policies for viewing images (public access)
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Anyone can view event images') THEN
        EXECUTE 'CREATE POLICY "Anyone can view event images" ON storage.objects FOR SELECT USING (bucket_id = ''event-images'')';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Anyone can view gallery images') THEN
        EXECUTE 'CREATE POLICY "Anyone can view gallery images" ON storage.objects FOR SELECT USING (bucket_id = ''gallery-images'')';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Anyone can view user avatars') THEN
        EXECUTE 'CREATE POLICY "Anyone can view user avatars" ON storage.objects FOR SELECT USING (bucket_id = ''user-avatars'')';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Anyone can view buddy avatars') THEN
        EXECUTE 'CREATE POLICY "Anyone can view buddy avatars" ON storage.objects FOR SELECT USING (bucket_id = ''buddy-avatars'')';
    END IF;
    
    -- Policies for uploading/updating (authenticated users only)
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Authenticated users can upload user avatars') THEN
        EXECUTE 'CREATE POLICY "Authenticated users can upload user avatars" ON storage.objects FOR INSERT WITH CHECK (bucket_id = ''user-avatars'' AND auth.role() = ''authenticated'')';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Authenticated users can upload buddy avatars') THEN
        EXECUTE 'CREATE POLICY "Authenticated users can upload buddy avatars" ON storage.objects FOR INSERT WITH CHECK (bucket_id = ''buddy-avatars'' AND auth.role() = ''authenticated'')';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Authenticated users can update their avatars') THEN
        EXECUTE 'CREATE POLICY "Authenticated users can update their avatars" ON storage.objects FOR UPDATE USING (bucket_id IN (''user-avatars'', ''buddy-avatars'') AND auth.role() = ''authenticated'')';
    END IF;
END $$;
