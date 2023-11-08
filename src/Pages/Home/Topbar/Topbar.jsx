import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai';
import { FaQuora } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'


const Topbar = () => {
    return (
        <div className='md:flex justify-between bg-[#f2f2f0] py-1  border-b px-4 sm:px-10 lg:px-20 hidden font-jost overflow-hidden'>
            <div className='flex items-center'>
                <p> (000)999-898-999 </p>
                <p className="mx-2"> | </p>
                <p> info@trisog.com</p>
            </div>
            <div className='flex items-end gap-5'>
                {/* Icons added from React icons  */}
                <div className='flex items-center gap-1'>
                    <AiOutlineTwitter></AiOutlineTwitter>
                    <AiFillLinkedin></AiFillLinkedin>
                    <AiOutlineGoogle></AiOutlineGoogle>
                    <FaQuora></FaQuora>
                    <p className='mx-2'>|</p>
                </div>
                <div className='flex items-center gap-1'>
                    <h3>EUR</h3>
                    <RiArrowDropDownLine></RiArrowDropDownLine>
                </div>
            </div>
        </div>
    );
};

export default Topbar;