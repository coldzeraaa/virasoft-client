import Image from 'next/image';

const UserProfilePage = ({ me }: UserData) => (
  <div className="flex w-fit flex-col gap-4 rounded-md px-4 py-4 shadow-md">
    <div className="flex w-full flex-col justify-center ">
      <div className="avatar flex items-center justify-center ">
        <div className="w-24 rounded-full">
          <Image
            width={400}
            height={400}
            src={
              me?.profileimg ||
              'data:image/jpeg;base64,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'
            }
            alt="User profile"
          />
        </div>
      </div>
      <p className="text-center text-neutral">{data?.email || 'Email not provided'}</p>
      <p className="text-center text-neutral">Мэдээлэл засах</p>
    </div>
    <div className="flex gap-2">
      <button type="button" className="btn text-neutral">
        Устгах
      </button>
      <button type="button" className="btn text-neutral">
        Зурагаа өөрчлөх
      </button>
    </div>
  </div>
);

interface UserData {
  email?: string;
  profileimg?: string;
}

export default UserProfilePage;
