function Tailwind() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <div className=" bg-yellow-300 flex justify-between p-1">
                <h1 className="text-2xl">All the topics</h1>
                <button className="bg-blue-500 p-1 mr-4 text-white hover:bg-blue-200 hover:text-black rounded-md">Dark/light</button>
            </div>
            <section className="flex  gap-2" >
                <div className="cursor-pointer rounded-md p-2 ml-6 text-xl border  mt-2 w-1/2  ">
                    <ul role="list" className="marker:text-blue-600 list-inside list-decimal">
                        <li className="">Custom utilities classes</li>
                        <li className="">Groups </li>
                        <li className="">Peers</li>
                        <li className="">Placeholder text</li>
                        <li className="">File inputs</li>
                        <li className="">Selection text</li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=""></li>
                        <li className=" empty:bg-green-700">fgf</li>


                    </ul>
                </div>
                <section className="border  m-2 flex-1 rounded-md p-2 bg-heitor text-white ">
                    <p className="selection:bg-red-500 selection:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea voluptatum quo quasi inventore. Cum non fugit possimus ut magnam voluptas, neque sapiente consectetur asperiores natus nostrum ipsum, aliquid esse.
                        Neque quidem aliquam sed, odio amet soluta exercitationem maxime praesentium in ducimus! Consequuntur, dolor perspiciatis dolore recusandae, doloribus ullam accusantium expedita a sunt assumenda unde alias deleniti? Vel, omnis sequi?</p>
                </section>
            </section>
            <div className="heitor bg-slate-700">
                <h1>Eu sou o maior</h1>
                <p>Ninguém é maior do que ninguém</p>
                <p>Novas formas de amar</p>
            </div>

        </>

    );
}

export default Tailwind;