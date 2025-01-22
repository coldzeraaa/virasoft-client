import Image from 'next/image';

const UserProfilePage = ({ me }) => (
  <div className="flex w-fit flex-col gap-4 rounded-md px-4 py-4 shadow-md">
    <div className="flex w-full flex-col justify-center  gap-2">
      <div className="avatar flex items-center justify-center ">
        <div className="w-24 rounded-full">
          <Image width={400} height={400} src="https://placehold.co/400" alt="User profile" />
        </div>
      </div>
      <p className="text-center text-neutral">{me?.email || 'Email not provided'}</p>
    </div>
    <div className="flex gap-2">
      <button type="button" className="btn text-base">
        Устгах
      </button>
      <button type="button" className="btn text-base">
        Зурагаа өөрчлөх
      </button>
    </div>
  </div>
);

export default UserProfilePage;
{
  /* <p className="text-center text-base">Мэдээлэл засах</p> */
}
