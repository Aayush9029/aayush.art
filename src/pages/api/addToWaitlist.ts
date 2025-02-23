import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = 'https://zofdlsdkhbdkieomurgq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvZmRsc2RraGJka2llb211cmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1ODI3MjYsImV4cCI6MjA1NTE1ODcyNn0.q2sw9CNJ_DZ71b-kAHtLr_hNV0htYXLRGtEXCHVlxgI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      return res.status(200).json({ message: 'Successfully added to waitlist' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to add to waitlist' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 