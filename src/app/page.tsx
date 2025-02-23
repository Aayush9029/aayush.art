import tweets from '@/data/tweets.json';
import Tweet from '@/components/Tweet';
import Profile from '@/components/Profile';
import Waitlist from '@/components/Waitlist';
import { TweetsData } from '@/types/allTypes';

export default function Home() {
  const typedTweets = tweets as TweetsData;

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Profile {...typedTweets.author} />
        
        <div className="space-y-6">
          {typedTweets.tweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>

        <Waitlist />
      </div>
    </main>
  );
}
