'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation'

export function ConfigurationList({ configurations }: { configurations: Array<{ name: string, price: string }> }) {
  const router = useRouter()


  return (
    <div className="space-y-4 p-4">
      {configurations.map((config, index) => (
        <Card onClick={() => router.push('/configuration')} key={index}>
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div>{config.name}</div>
            <div className="flex items-center space-x-2">
              <div>{config.price}</div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <TrashIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
      <Button className="w-full rounded-md">Ajouter une configuration</Button>
    </div>
  );
}

interface TrashIconProps {
  className?: string;
  width?: number;
  height?: number;
}

function TrashIcon(props: TrashIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}


