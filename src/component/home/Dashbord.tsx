import React, { useEffect, useRef, useState } from 'react';
import { FaUser } from "react-icons/fa";
import TaskCard from '../common/TaskCard';
import Calendar from 'react-calendar';
import app from '../App.css'
import Empty from '../../assets/tasks/emty.png';
import { FaTasks } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navbar } from '../navigations/Navbar';
import { getTaskAction } from '../../redux/store/actions/tasks/getTaskAction';
import { useAppDispatch, useAppSelector } from '../../hooks/hooke';
import { RootState } from '../../redux/store';
import { toast } from 'sonner';
import { deleteTaskAction } from '../../redux/store/actions/tasks/deleteTaskAction';
import { updateTaskAction } from '../../redux/store/actions/tasks/updateTaskAction';
import { Tasks } from '../../page/tasks/tasks';





type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Dashboard: React.FC = () => {
    const {data}=useAppSelector((state:RootState)=>state.user)
    const [selectedButton, setSelectedButton] = useState<any>('in-prograss');
    const [value, onChange] = useState<Value>(new Date());
    const [activeIndex, setActiveIndex] = useState(0);
    const [taskes ,setTasks]= useState<any>([])
    const [isLoading,setLoading]= useState<boolean>(false)
    const [filteredTask,setFilter]= useState<any>([])
    const scrollRef:any = useRef(null);
    const dispatch = useAppDispatch()
    useEffect(()=>{
        const getTask =async ()=>{
         const response= await dispatch(getTaskAction({userId:data._id}))
         console.log('the fretched data',response);
         if(response.payload.success){
           setTasks(response.payload.data)
           setFilter(response.payload.data)
         }
        }
        getTask()
     },[dispatch])
     const today = new Date();
     today.setHours(0, 0, 0, 0);
    
      
    
    const Pending = taskes.filter((el:any)=>el.completionStatus==false).length
    const todays =  taskes.filter((task:any) => new Date(task.date).setHours(0, 0, 0, 0) === today.getTime()).length
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
        if(buttonType=='in-prograss'){
            setFilter(taskes.filter((el:any)=>el.completionStatus==false))
        }else{
            setFilter(taskes.filter((el:any)=>el.completionStatus==true))
        }
    };
    const formatDate = (dueDate: string) => {
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        const taskDate = new Date(new Date(dueDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    
        now.setHours(0, 0, 0, 0);
        taskDate.setHours(0, 0, 0, 0);
    
        const diffTime = now.getTime() - taskDate.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays > 0) return `${diffDays} days ago`;
        if (diffDays === -1) return 'Tomorrow';
        return `${Math.abs(diffDays)} days left`;
      };

      const handleDelete = async(data:any) =>{
        setLoading(true)
        await dispatch(deleteTaskAction(data))
        setTasks(((pre:any)=> pre.filter((el:any)=>el._id!=data)))
        setLoading(false)
        toast.success('Task deleted successfully!')
      } 
      const handleUpdate = async (datass: any) => {
        setLoading(true);
        const datas = { _id: datass, completionStatus: true ,userId:data._id};
        
        try {
          
          const response = await dispatch(updateTaskAction(datas));
          
          setTasks((prev: any) => prev.map((el: any) => 
            el._id === data._id ? { ...el, completionStatus: true } : el
          ));
          
          toast.success('Task updated successfully!');
        } catch (error) {
          console.error('Error updating task:', error);
          toast.error('Failed to update task');
        } finally {
          setLoading(false);
        }
      };
     

   

    return (
        <div className="flex-1 p-4 w-full">
           <Navbar/>    
            <section className='p-5'>
                <h1 className='text-3xl text-black'>Hello {data.username}!</h1>
                <p className='text-black'>Have a nice day..</p>

            </section>

            <section className="md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6   hidden">
                <TaskCard title="Totel Tasks" progress={taskes.length} />
                <TaskCard title="Todays tasks" progress={todays} />
                <TaskCard title="Pending Tasks" progress={Pending} />
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
                <div className='md:w-3/4 mx-w-7wl w-full '>
                    <h3 className="text-xl font-semibold mb-4 text-black ">Recent</h3>
                    <div className=' rounded-lg md:mr-4'>
                    {taskes.length > 0 ? (
            filteredTask?.slice(0,3).map((task:any) => (
              <div key={task._id} className="bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
                <div className="bg-purple-600 p-2 rounded-lg mr-4">
                  <FaTasks className="text-white text-xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-800 font-medium">{task.task}</h3>
                  <p className="text-gray-500 text-sm">{formatDate(task.date)}</p>
                </div>
                <div className="text-gray-400 text-xl">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">⋮</div>
                    <ul tabIndex={0} className="dropdown-content menu absolute bg-gray-100 text-black rounded-box z-[1] w-52 p-2 shadow-lg">
                    {task?.completionStatus?(
                        <li onClick={()=>toast.info('You already completed!')}><a>completed</a></li>
                      ):(
                        <li onClick={() => handleUpdate(task._id)}><a>Complete</a></li>
                      )}
                      <li onClick={() => handleDelete(task._id)}><a>Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='h-screen md:h-[10vh] flex justify-center md:items-center'>
              <img src={Empty} alt="No tasks" className='w-[30%] hidden md:block h-[10%] md:w-[10%] md:h-[100%] relative md:top-[20vh] top-[10%]' />
            </div>
          )}
                    </div>

                </div>
                <div className='w-1/4  p-2 rounded-lg shadow-xl bg-white hidden md:block'>
                    <Calendar onChange={onChange} value={value} />
                </div>

            </section>

            
        </div>
    );
};

export default Dashboard;
