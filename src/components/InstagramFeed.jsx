import React from 'react';
import { QrCode, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_POSTS, CLINIC_INFO } from '../data/treatments';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative py-24 bg-obsidian-950/70 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-300 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
              Social Aesthetics Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Connect With Us On <span className="gold-text-gradient italic">Instagram</span>
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300/80 font-light mt-1">
              Follow for daily skin care tips, behind-the-scenes clinic treatments, and patient glow stories.
            </p>
          </div>

          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gold-500/30 bg-obsidian-900 hover:border-gold-400 text-gold-300 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-gold-500/10 transition-all shrink-0"
          >
            <span>Follow {CLINIC_INFO.instagram}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid: 4 Posts + 1 QR Connect Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          
          {/* Official QR Code Card matching the flyer */}
          <div className="lg:col-span-1 rounded-3xl glass-panel p-6 border border-gold-500/30 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-gradient-to-b from-obsidian-900 to-obsidian-950">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-gold-400 flex items-center justify-center text-white mb-3 shadow-md">
              <InstagramIcon className="w-5 h-5" />
            </div>

            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-400">
              SCAN TO CONNECT
            </span>
            <h4 className="font-serif font-bold text-white text-base mt-0.5">
              {CLINIC_INFO.instagram}
            </h4>

            {/* Generated QR code graphic */}
            <div className="relative my-4 p-3 bg-white rounded-2xl shadow-inner border border-gold-400/40">
              {/* Simulated stylized QR Code with Instagram center icon */}
              <div className="w-28 h-28 flex flex-col justify-between p-1 bg-white">
                <div className="flex justify-between">
                  <div className="w-7 h-7 border-4 border-black rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm" />
                  </div>
                  <div className="w-7 h-7 border-4 border-black rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="p-1 rounded-md bg-gold-500 text-obsidian-950">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-7 h-7 border-4 border-black rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm" />
                  </div>
                  <div className="w-7 h-7 grid grid-cols-2 gap-0.5 p-1 bg-gray-100">
                    <div className="bg-black" />
                    <div className="bg-black" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-ivory-400 font-light leading-snug">
              Point your smartphone camera to visit our official Instagram profile directly.
            </p>
          </div>

          {/* 4 Instagram Visual Posts */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden glass-panel border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-obsidian-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-semibold">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-gold-300" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3 bg-obsidian-950/80 px-2.5 py-0.5 rounded text-[10px] font-semibold text-gold-300 uppercase tracking-wider backdrop-blur-sm">
                    {post.tag}
                  </div>
                </div>

                <div className="p-3.5 bg-obsidian-900/90 flex-1 flex flex-col justify-between">
                  <p className="text-xs font-medium text-ivory-100 line-clamp-2">
                    {post.title}
                  </p>
                  <span className="text-[10px] text-gold-400/80 uppercase tracking-widest font-semibold mt-2 block">
                    @ojasvidermaclinic
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
