import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar.tsx";

export function Conversations() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 w-full">
          <div className="flex text-sm font-medium leading-none">
            User 01
            <p className="ml-auto text-muted-foreground">22:00</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Hello! How are you doing?
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 w-full">
          <div className="flex text-sm font-medium leading-none">
            User 02
            <p className="ml-auto text-muted-foreground">21:00</p>
          </div>
          <p className="text-sm text-muted-foreground">
            You: Text me if you're online
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 w-full">
          <div className="flex text-sm font-medium leading-none">
            User 03
            <p className="ml-auto text-muted-foreground">20:00</p>
          </div>
          <p className="text-sm text-muted-foreground">Go on</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 w-full">
          <div className="flex text-sm font-medium leading-none">
            User 04
            <p className="ml-auto text-muted-foreground">19:00</p>
          </div>
          <p className="text-sm text-muted-foreground">Nice</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 w-full">
          <div className="flex text-sm font-medium leading-none">
            User 05
            <p className="ml-auto text-muted-foreground">18:00</p>
          </div>
          <p className="text-sm text-muted-foreground">You: See you later</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 w-full">
          <div className="flex text-sm font-medium leading-none">
            User 06
            <p className="ml-auto text-muted-foreground">17:00</p>
          </div>
          <p className="text-sm text-muted-foreground">You: Bye</p>
        </div>
      </div>
    </div>
  );
}
