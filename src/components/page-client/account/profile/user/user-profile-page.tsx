'use client';
import { Lock, Mail, Phone, UserPen } from 'lucide-react';

import UserDetailCard from './user-detail-card';
import { UserProfileSec } from './user-profileSec';

import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMeQuery } from '@/gql/query/user/me.generated';

export function UserDetailPage() {
  const { data, loading, error } = useMeQuery();

  if (loading) {
    return <LoadingResult />;
  }
  if (error || !data?.me) {
    return <ErrorResult message={error?.message || 'User not found'} />;
  }
  return (
    <div>
      <div className="flex gap-6">
        <UserProfileSec me={data?.me} />
        <div className="flex gap-4">
          {detailsCardData.map((element, i) => (
            <UserDetailCard key={i} text={element.text} icon={element.icon} value={element.value} link={element.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
