'use client';
import { Lock, Mail, Phone, UserPen } from 'lucide-react';

import UserDetailCard from '@/components/user-dashboard/profile/user-detail-card';
import UserProfile from '@/components/user-dashboard/profile/user-profileSec';
import { useMeQuery } from '@/gql/query/user/me.generated';

const UserDetailPage = () => {
  const { data, loading: meLoading } = useMeQuery();
  const user = '';
  if (meLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  console.log(data);

  return (
    <div>
      <div className="flex gap-6">
        <UserProfile data={data} />
        <div className="flex gap-4">
          {detailsCardData.map((element, i) => (
            <UserDetailCard key={i} text={element.text} icon={element.icon} value={element.value} link={element.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

const detailsCardData = [
  {
    text: 'Хувийн мэдээлэл',
    icon: <UserPen />,
    value: 'Мэдээлэл засах',
    link: '/account/profile/info',
  },
  {
    text: 'Гар утас',
    icon: <Phone />,
    value: 'Баталгаажаагүй',
    link: '/account/profile/mobile',
  },
  {
    text: 'Нууц үг',
    icon: <Lock />,

    value: 'шинэчлэх',
    link: '/account/profile/password',
  },
  {
    text: 'И-мэйл',
    icon: <Mail />,

    value: 'Баталгаажаагүй',
    link: '/account/profile/e-mail',
  },
];
export default UserDetailPage;
