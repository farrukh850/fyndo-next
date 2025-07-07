import { useRef, useState } from "react";

function Video() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!iframeRef.current) return;

    // Send postMessage to iframe
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: isMuted ? 'unmute' : 'mute'
      }),
      '*'
    );

    setIsMuted((prev) => !prev);
  };
  return (
    <div className="max-w-[408px] w-full h-[564px] mx-auto group z-10 relative">
      <iframe
        ref={iframeRef}
        src="https://iframe.mediadelivery.net/embed/463100/1fd1c08b-044f-46ed-ad30-7c8b0125fb34?autoplay=false&loop=true&muted=true"
        loading="lazy"
        allow="autoplay"
        className="w-full h-full object-cover"
      />

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full z-10"
        aria-label="Toggle sound"
      >
        {isMuted ? (
          // Muted Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          // Unmuted Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.536 8.464a5 5 0 010 7.072" />
            <path d="M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0A7.975 7.975 0 0112 6" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default Video