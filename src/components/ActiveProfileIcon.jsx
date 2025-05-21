import profileicon from "../assets/images/profile-img2.png";

export function LiveAvatar() {
  return (
    <div className="relative inline-block">
      <img
        src={profileicon}
        alt="profile img icon"
        className="h-10 w-10 sm:w-11 sm:h-11 lg:h-14 lg:w-14 xl:h-[40px] xl:w-[40px] rounded-full"
        loading="lazy"
      />

      {/* Live badge */}
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-2 ring-white animate-ping" />
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-2 ring-white" />
    </div>
  );
}
