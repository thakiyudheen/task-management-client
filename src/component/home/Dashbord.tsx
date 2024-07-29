import React, { useEffect, useRef, useState } from 'react';
import { FaUser } from "react-icons/fa";
import TaskCard from '../common/TaskCard';
import Calendar from 'react-calendar';
import app from '../App.css'
import 'react-calendar/dist/Calendar.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Progress from '../common/Prograss';
import { Navbar } from '../navigations/Navbar';





type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Dashboard: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<any>('in-prograss');
    const [value, onChange] = useState<Value>(new Date());
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef:any = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const scrollPosition = scrollRef.current.scrollLeft;
                const cardWidth = scrollRef.current.offsetWidth;
                const newIndex = Math.round(scrollPosition / cardWidth);
                setActiveIndex(newIndex);
            }
        };

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleButtonClick = (buttonType: any) => {
        setSelectedButton(buttonType);
    };
    return (
        <div className="flex-1 p-4 w-full">
           <Navbar/>    
            <section className='p-5'>
                <h1 className='text-3xl text-black'>Hello {'Nahyan'}!</h1>
                <p className='text-black'>Have a nice day..</p>

            </section>

            <section className="md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6   hidden">
                <TaskCard title="Today task" progress="In Progress" />
                <TaskCard title="Completed tasks" progress="Completed" />
                <TaskCard title="Pending Tasks" progress="Pending" />
            </section>


            <section className='flex px-3 '>
                <button
                    className={`rounded-full px-3 py-2 shadow-sm ${selectedButton === 'in-prograss' ? ' bg-white text-black' : 'bg-purple-100 text-black'
                        }`}
                    onClick={() => handleButtonClick('in-prograss')}
                >
                    <small>In-progress</small>
                </button>
                <button
                    className={`rounded-full px-3 py-2 ml-[1vh] shadow-sm ${selectedButton === 'completed' ? 'bg-white text-black' : 'bg-purple-100 text-black'
                        }`}
                    onClick={() => handleButtonClick('completed')}
                >
                    <small>Completed</small>
                </button>
            </section>

            <section
                ref={scrollRef}
                className="flex mb-2 overflow-x-scroll space-x-2 md:hidden mt-[4%] p-2 snap-x snap-mandatory
             scrollbar-hide"
            >
                <TaskCard title="Today task" progress="In Progress" />
                <TaskCard title="Completed tasks" progress="Completed" />
                <TaskCard title="Pending Tasks" progress="Pending" />
            </section>
            <div className="flex justify-center md:hidden">
                {[0, 1].map((index) => (
                    <span
                        key={index}
                        className={` rounded-full mx-1 ${index === activeIndex ? 'bg-purple-600 w-5 h-2' : 'bg-gray-300 w-2 h-2'
                            }`}
                    ></span>
                ))}
            </div>


            <section className=" p-4 rounded-lg   mb-6 flex ">
                <div className='md:w-3/4 mx-w-7wl w-full'>
                    <h3 className="text-xl font-semibold mb-4 text-black ">Progress</h3>
                    <div className=' rounded-lg md:mr-4'>
                        <Progress />
                    </div>

                </div>
                <div className='w-1/4  p-2 rounded-lg shadow-xl bg-white hidden md:block'>
                    <Calendar onChange={onChange} value={value} />
                </div>

            </section>

            {/* <section className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Team Members</h3>
        <div className="space-y-4">
         
        </div>
      </section> */}
        </div>
    );
};

export default Dashboard;
