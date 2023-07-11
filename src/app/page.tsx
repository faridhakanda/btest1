import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      
      <form className="flex flex-col mx-auto">
        <h1 className="text-center text-2xl">Boehm Test</h1>
        <input className="mb-1 p-2 rounded-md" name="name" type="text" placeholder="শিক্ষার্থীর নাম..."/>
        <input className="mb-1 p-2 rounded-md" name="name" type="text" placeholder="শিক্ষার্থীর বয়স..."/>
        <input className="mb-1 p-2 rounded-md" name="name" type="text" placeholder="স্কুলের নাম..." />
        <input className="mb-1 p-2 rounded-md" name="name" type="text" placeholder="পারিবারিক অবস্থা..."/>
      </form>
      <div className="container bg-purple-500 max-w-2xl mx-auto text-lg rounded-md mb-1 p-1">
        <div>
          <h1 className="p-4">1.নিচের কোনটি পাখি দেখাও।</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/apple.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/sun.svg" alt="apple" width="0" height="0"/>
          </div>
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/bird.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/book.svg" alt="apple" width="0" height="0"/>
          </div>
        </div>
      </div>
    

      <div className="container bg-purple-500 max-w-2xl mx-auto text-lg rounded-md mb-1 p-1">
        <div>
          <h1 className="p-4">2.নিচের কোনটি আম দেখাও।</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/car.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/sun.svg" alt="apple" width="0" height="0"/>
          </div>
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/bird.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/banana1.svg" alt="apple" width="0" height="0"/>
          </div>
        </div>
      </div>
      
      <div className="container bg-purple-500 max-w-2xl  mx-auto text-lg rounded-md mb-1 p-1">
        <div>
          <h1 className="p-4">3.নিচের কোনটি আপেল দেখাও।</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/apple.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/sun.svg" alt="apple" width="0" height="0"/>
          </div>
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/bird.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/banana1.svg" alt="apple" width="0" height="0"/>
          </div>
        </div>
      </div>
        
      <div className="container bg-purple-500 max-w-2xl mx-auto text-lg rounded-md mb-1 p-1">
        <div>
          <h1 className="p-4">4.নিচের কোনটি কলা দেখাও।</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/apple.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/sun.svg" alt="apple" width="0" height="0"/>
          </div>
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/moon.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/banana1.svg" alt="apple" width="0" height="0"/>
          </div>
        </div>
      </div>

      <div className="container bg-purple-500 max-w-2xl mx-auto text-lg rounded-md mb-1 p-1">
        <div>
          <h1 className="p-4">5.নিচের কোনটি সূর্য দেখাও।</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/home.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/sun.svg" alt="apple" width="0" height="0"/>
          </div>
          <div>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/bird.svg" alt="apple" width="0" height="0"/>
            <Image className="w-fit h-fit border rounded m-1 p-2 hover:bg-lime-500" src="/banana1.svg" alt="apple" width="0" height="0"/>
          </div>
        </div>
      </div>

     
      
    </main>
  )
}
