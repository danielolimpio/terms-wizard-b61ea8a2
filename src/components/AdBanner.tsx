interface AdBannerProps {
  className?: string;
}

export const AdBanner = ({ className = "" }: AdBannerProps) => {
  return (
    <div className={`text-center my-8 relative overflow-hidden rounded-lg ${className}`}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full max-w-[970px] h-[90px] block object-cover cursor-pointer mx-auto"
        poster="https://res.cloudinary.com/da1qwcv4u/image/upload/v1755918058/Sem_t%C3%ADtulo_18_wxefta.jpg"
        onClick={() => window.open('https://solarien.com.br', '_blank')}
      >
        <source src="https://res.cloudinary.com/da1qwcv4u/video/upload/v1755918058/Sem_t%C3%ADtulo_18_wxefta.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
};