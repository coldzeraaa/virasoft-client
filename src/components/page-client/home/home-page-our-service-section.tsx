import { Droplet, Lightbulb, MapPin, ShieldCheck } from 'lucide-react';

export function HomePageOurServiceSection() {
  return (
    <div
      className="flex justify-center  bg-gray-100 py-4
    "
    >
      <div className=" flex w-[7/10] flex-col gap-4">
        <h1 className="text-2xl">Манай үйлчилгээ</h1>
        <p>
          Бид үйлчлүүлэгчдийнхээ түлшний хангамжийг цаг алдалгүй тогтвортой хангах мөн өрсөлдөхүйц үнийн саналийг санал болгож түргэн
          шуурхай , найвдартай үйлчилгээг үзүүлэхээр ажиллаж байна.
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          {informationData.map((element, idx) => (
            <InformationCard key={idx} data={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

const InformationCard = ({ data }: { data: informationDataType }) => (
  <div className="flex w-full items-center justify-start gap-2 rounded-md bg-gray-200 ">
    <div className="h-8 w-8">{data.icon}</div>
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  </div>
);

const informationData = [
  {
    icon: <MapPin className="h-full w-full" />,
    title: 'Шууд захиалга хийх боломжтой',
    description: 'Монгол орны хаанаас ч захиалаад авах боломжтой.',
  },
  {
    icon: <ShieldCheck className="h-full w-full" />,
    title: 'Түлшний аюулгүй байдал',
    description:
      'Бид таны түлшийг цаг алдалгүй хүргэж өгөх  тул та түлш хадгалах шаардлагагүй бөгөөд энэ нь таны аюулгүй байдлыг хамгаалах явдал юм.',
  },
  {
    icon: <Droplet className="h-full w-full" />,
    title: 'Зөөврийн түлшний хүргэлт',
    description: '1000 литрээс дээш хэмжээтэй түлш хүргэх.',
  },
  {
    icon: <Lightbulb className="h-full w-full" />,
    title: 'Мэргэжилтнүүдийн мэдлэг, зөвлөгөө',
    description: 'Хэрэв танд асуулт байвал эсвэл зөвлөгөө авах шаардлагатай бол холбогдоорой.',
  },
];

interface informationDataType {
  icon: JSX.Element;
  title: string;
  description: string;
}
