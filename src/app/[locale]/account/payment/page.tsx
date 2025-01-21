import PaymentCard from '@/components/user-dashboard/orders/bank/bank-card';
const mockData = [
  {
    bankName: 'Bank Name',
    bankIcon: 'https://mtn-prod-bucket.s3.amazonaws.com/photos/company/71597499445547/75128179707675_MicrosoftTeams-image%20(1).png',
    link: 'https://mtn-prod-bucket.s3.amazonaws.com/photos/company/71597499445547/75128179707675_MicrosoftTeams-image%20(1).png',
    value: ' bankaar toloh bol',
  },
];
const Payment = () => {
  const a: any = [];
  return (
    <div>
      <h1 className="text-2xl">Төлбөрийн төрөл</h1>
      <div className="py-3 ">
        {mockData.map((element, idx) => (
          <PaymentCard key={idx} data={element} />
        ))}
      </div>
      <hr />
      <div className="text-2xl">Хувааж төлөх нөхцөл</div>
      <div>
        {a &&
          a.map((element, idx) => {
            <PaymentCard key={idx} data={element}></PaymentCard>;
          })}
      </div>
    </div>
  );
};

export default Payment;
