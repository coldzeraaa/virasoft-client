import Image from 'next/image';

export function HomePageParthnerSection() {
  return (
    <div className=" flex justify-center bg-gray-200 py-4">
      <div className="flex w-4/5 flex-col justify-start">
        <h2>Хамтрагч байгуулга</h2>
        <h2>ХАМТРАН АЖИЛЛАЖ БУЙ БАЙГУУЛЛАГУУД </h2>
        <div>
          {parthnerData.map((element, idx) => (
            <div className="max-h-36 max-w-36" key={idx}>
              <Image alt="logo-image" width={500} height={500} src={element.logo}></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const parthnerData = [
  {
    logo: 'https://s3-alpha-sig.figma.com/img/d974/5597/639e57e49046a79ca37c3432146e1458?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUv6nrPwu4odeMQTB0adZaBVDpi~IJTmvHCGoZ1YPbJGZi7CA8lRkbyJ~loUmwcZKZWM6Gsmm6zwCUljx~A8379qBxZPzvJkCaJmMGP0xZ9-my~6qBnmxbONrKkS68Edk9owVH1D6iMGct9S4N2bsl21t0EqRPFZp-cOCr2J6t8sntJyc3HiLhX6bzo1JusZ85nDfaHcUinrZr-TS6c7aVeiYDH~jhwpn5u9w14waZ4qJKhkuOzpRXMpeUfusxDN4pL2M22SD5LJBR8o2nklZTPJnqcpTtHMQVEhVbuBNZDKSGb8gwiPIEXCeJ--0EnhkKJWSfG7J7tsT5Byh0546w__',
  },
];
