import React,{useState,useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
    const [pickup,setPickup] = useState('')
    const [destination,setDestination] = useState('')
    const [panelOpen,setPanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%',
                opacity:1,
                padding:24
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%',
                padding:0
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }   
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanelOpen){  
            console.log('hello')  
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)',
                duration:0.5,
                ease:'power1.out'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)',
                duration:0.5,
                ease:"power1.out"
            })
        }
    },[vehiclePanelOpen])

    return(

        <div
            className='h-screen relative'
        >
            <img 
                className='w-16 absolute left-5 top-5'
                src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s'        
            />
            <div className='h-screen w-screen'>
                <img
                    className='w-screen'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUqoICN37QQVovjChZ_y4tgtGjIhNSHNC7w&s"
                />
            </div>
            <div
                className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full'
            >
                <div className='h-[30%] p-6 bg-white relative ' >
                    <h5
                        ref={panelCloseRef}
                        onClick={()=>{
                            setPanelOpen(false)
                        }}
                        className='absolute opacity-0 right-6 top-6 text-2xl'
                    >
                        <i 
                            className='ri-arrow-down-wide-line'
                        />
                    </h5>
                    <h4
                        className='text-2xl font-semibold'
                    >
                        Find a trip
                    </h4>
                    <form
                        onSubmit={(e)=>{
                            submitHandler(e)
                        }}
                    >
                    <div 
                        className='line absolute h-16 w-1 top-[30%] left-10 bg-gray-900 rounded-full'
                    />
                    <input 
                        type='text'
                        className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                        placeholder='add a pick-up loaction'
                        value = {pickup} 
                        onClick={()=>{
                            setPanelOpen(true)
                        }}
                        onChange={(e)=>{
                            setPickup(e.target.value)
                        }}
                    />
                    <input
                        type='text'
                        className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-3 w-full'
                        placeholder='add a drop location'
                        value = {destination}
                        onClick={()=>{
                            setPanelOpen(true)
                        }}
                        onChange={(e)=>{
                            setDestination(e.target.value)
                        }}
                    />
                    </form>
                </div>
                <div 
                    ref={panelRef}
                    className='h-[70%] bg-white p-5 opacity-0'
                >
                    <LocationSearchPanel
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel = {setVehiclePanelOpen}
                    />
                </div>
            </div>
            <div
                ref={vehiclePanelRef}
                className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8"
            >
                <h3
                    className='text-2xl font-semibold mb-5'
                >
                    Choose a Vehicle
                </h3>
                <div 
                    className='flex border-2 mb-2 active:border-black rounded-md items-center w-full justify-between'
                >
                    <img 
                        className='h-20'
                        src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                    />
                    <div
                        className='w-1/2'
                    >
                        <h4
                            className='font-medium text-base'
                        >
                            UberGo
                            <span>
                                <i className='ri-user-3-fill'>4</i>
                            </span>
                        </h4>
                        <h5
                            className='font-medium text-sm'
                        >
                            2 mins away
                        </h5>
                    <p
                        className='font-medium text-xs text-gray-600'
                    >Affordable, compact rides</p>
                    </div>
                    <h2
                        className='text-xl font-semibold mr-2'
                    >
                    ₹193
                    </h2>
                </div>
                <div 
                    className='flex border-2 mb-2 active:border-black rounded-md items-center w-full justify-between'
                >
                    <img 
                        className='h-20'
                        src="data:image/jpeg;base64,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"                    
                    />
                    <div
                        className='w-1/2'
                    >
                        <h4
                            className='font-medium text-base'
                        >
                            UberGo
                            <span>
                                <i className='ri-user-3-fill'>4</i>
                            </span>
                        </h4>
                        <h5
                            className='font-medium text-sm'
                        >
                            2 mins away
                        </h5>
                    <p
                        className='font-medium text-xs text-gray-600'
                    >Affordable, compact rides</p>
                    </div>
                    <h2
                        className='text-xl font-semibold mr-2'
                    >
                    ₹65.00
                    </h2>
                </div>
                <div 
                    className='flex border-2 mb-2 active:border-black rounded-md items-center w-full justify-between'
                >
                    <img 
                        className='h-20'
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUTEhIVFRUQFRAVEBYWFRUVFRUVFhcXFhcXFhYYHSggGBolGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0vLy0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABBEAACAQIDBAcFBAgGAwEAAAAAAQIDEQQFMQYSIUEyUWFxgZGhBxMiQrFSgsHRFCMkM3KywuEVQ2J0kvA0c6IW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADgRAQACAQIEBAMGBAYDAQAAAAABAgMEEQUSITEyQVFxIoGxEzNCkaHRFGHB4RUjUmJy8CQ00gb/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAA5VcTCPSkl48fIrN6x3lMVmeyNPNaS5t9y/MynUY4814xWcJ53HlF+LKTq6+ULfYy4yzqXKK9Sk6v0hb7Fyeb1OtLwRSdVZP2MG/4pU+16Ij+Jun7KpY5pU+16ImNTdH2VXaGbz5pPwLxqZ81ZxQk083jzi13cTWNRWe6s4pSqeNpv5l48DWMlZ81JrMO8ZJ6F1SgAAAAAAAAAAAAAAAAAAAAAAAAAAAANqTSTb0SuyJnaNxkMwzuc27O0eSX4niajW3mdo7O3HhrEIKxTOL+It5tuWD1XJjUHKeqppGWEcpyqGkXhGxymWixscpE8yNi7xbmRsVSJ3NiqRO6NjlMnmNj4V2tG0XjJMdlZrEpVLM6i537+JrXUWhScUJdPOPtR8jaupjzhScXolUsypvnbvNYzUnzUmloSoTT0afczSJieyhxIAAAAAAAAAAAAAAAAAAAAAACp2kxO7S3VrN+iOXV35ce3q1w13sxsmfO3neXdAKpNuc8x1WKqjI3mB0jXLxltBs6RrmkahGzpGqbVzo5T1UNIywjY5VC8ZIRscqhfnhGxd8nnNh7xD7SINjZYmK5mdtVjr3k5Jc5Y9GFuI447LfZmPMXyRlPE58oT9lAjmU1o7ERxPJ5H2VU/B7R1Iv4/ijz6/Bndp+L332vG8Mb6asx0ayjUUoqS0kk13M+hraLRvDimNp2PJQAAAAAAAAAAAAAAAAAAAAz21fyeJ5+v7Q6MHmzDPCt3dhJPgytp2pMiD+nW1Rx1yb907usMXB6SXjw+pttv2k5odyJiY7pIUmAtyswkqqsc9oD1iB/EzHc2OWJLRq4OU2WJK21nocrlKq2c1s97eadjbme6RcncBIUvCCo2qhutnqm9hodl15Nn2eitzYKy83NG15WR1MgAAAAAAAAAAAAAAAAAAAGf2r0h944Nf4YdGDvLLs8G3d2G1NH3Mpk+7t7Ed1lsfk9Or7ydWCmk4xgnpfVvt1idnBtLTJW17xv5Q59ReazEQ2FDAUodClCPdGK+iPoK4qU8NYj5OSbTPeXmG0MmsXWs2v1kzwdT1y2ifV108MIlDGzvLjeyvxPLvERZtW0u9PMl80fIy3X5kiGLg/m8+BWU7w6XMrLEMElACEglBLkg3i0RKCp9heIkOSZvSIQ3uQ04KhHcbad27673NM+y0VaVw15J3h5mWZm87rA6mYAAAAAAAAAAAAAAAAAAACg2r6MPvfgcOu8MN8HeWWkeBbu7ST0fcyt/BPsebU7Ex/Z5dtSX0iexwSP/ABvnLj1PjX8pJK7dktW9D13O8jz3EKeJqzjxjKcnF9a0ufN57RbJaY9XZWNohDwz4z/hf1R5uXxfP92tTTFJURKXWDtpwKpXuzGEVeruTbtut8Hx9UdnD9Jj1GWa37beSmXJNK7wm7S5VHDxg4ScnNvhK2iXF3Xa4mvEeG4dLWJrad59dkYc1rz2VUIu3E8eKxLoLuDaEnwo30TfgzfHhyX8FZn2hSbVjvLvDBzfy277I7acL1V/w7e8wznPjjzdo5fLm0vU7KcDyz4rxHtvP7M51VfKHaOXx5tv0O3HwXFXxWmfyhnOqt5QNl85dPF1MNUfwzl+qelpWuk+9eqNdLMYMtsPlv0UyTN4izcnqMAAAAAAAAAAAAAAAAAAAAFBtX0Yfe/A4dd4Yb4O8stI8G3d2kloyl/BPsebhSzidGO4qkoptysr8+fDuOjhmrpiwbWtt1Y5qb27IuIztyVnKcv4pO31Oq3EsfaImVIxyqKtdt307Dzsmote28dF4rs6YGXT/gl9Uct/L3Xr5mqRXYPjIrMJdYsos0+wv/k/dkerwb/2J9mOo8CbtlUvXjH7EF5tu/okRx7JM5q19I+s/wBk6WPhmULL8NGSbfHjoW4Rw/Dnxzkydeu2yNRmtWdoNzqlGNB7qS+Kn39OPM9XU6TBiwzyUiOseX84YUyWtbrK1PTYEAAFAx21CcMSpxdm4wkn2xbV/RHja+u2XePR0Yp+F6dkWYrEYeFRatfEuqS1PT02b7XHFvz92V68s7LA3UAAAAAAAAAAAAAAAAAABntq5r4Vfirtrmr6fRnBrvDDfB3lmJHg27u0j0It4Z9hls+x9OnNb8rXjdKzfN9RjodJlzVmaR5sNRqMeKfjlR1doqa0Un5JHqU4PlnxTEfq4bcSxx2iZQa+0kvlhFd7b/I6qcHxx4rTP6MLcSvPhqk5BnU5yxG9NfBhq80lbhbd49fMpq9FgxRj5Y73rE+3Vpp9Rnyc+/8Apnbp5qF7XuP+ZKX3U/qjutw/Sz+D6sKZNZ6/nsuss2p3kpON0+a4PyZxZeDUtG+O23u0jiV8duXLX8mhwWZ0qnRlx6nwf9zxtRw/Ph62r09Y6w9HDq8OXw26+nm2Ww8/2pLrUv5WzbhE7aj5S0z+BI2jnfFVOzdS8Ir8bnPxeebU3/ltH6Q008bY4ccrq2k49fFd/wD36HRwHU8uScM9p6x7x/b6Kaqm9eb0Oz39y/4qf86Pf133M+8fWHJj8SxudbMXAS4DkwMttnH46b64zXk1+Z5PEvFSff8Ao3xdpW/s1zCznRb4P4o9/wD25HD8nLeaevVOWN67+j0A9hzgAAAAAAAAAAAAAAAAAA8325xUqeMco/YgpLk1qY5sMZa7dlftZx23hWYXOIT4P4X1P8GeBqNNkxdbR09fL+3zd2LU0ydp6+iyTujmnwy6HlntTxcqdWjupfFCWvZL+56HAJ/yrx/P+jz9dhrkvEz6MFPMKj+a3dZHvOWNPjjycJ1ZPVt97DSKxHaGl2CXx4v/AGOK/oPO4l2xf86/1dGH8XtLLnosWgySf6pd7LRLy9XH+Ytqcy8S4bQvMkz2vQqRlCpJNacb2v36rsMo02KLc8ViJ9W9Nbmr8M2mYehxxUqsVVnbeqRjKVuCu0nofGcQ658nvP6dH1mmnfFWfWILTnZp9TPOwZZxZK5I8p3b2rzVmE3O3ejfrlS/mR9vq7RbDFo7TNfrDy6Rtbb3WDOxmAAAAze2a/dff/pPM4l+H5tsXmrtmMX7vFU5dtn9fwODFfkyVt/NttvEw9lTPo3GAAAAAAAAAAAAAAAAAADyjbai4YmacnJvjd9UrtLwTt4FMVZrG0zv1lTV3i8xMRt0iPyZSojZ5tu6VgM1nSdr70eaevgzz9Rw3Hk3mnwz+n5fs6sGvyY+lusfqyftAjLE7s4q3uVL4Xq0+La8tCOH8OtpKTEzvuvk4njyZIrtMMAdzoAGp2A/eYr/AGOK/oPO4l4cf/OrbD3n2llj0WK5yS7jZJt7zslxei5ETMR1lw6ms2vG3o02DyXEz0oz75LcXnKxz34jpsfiyR8uv03Yxoc9+1Z+n1WEMl3f3tejT7N/el5L8yleJRf7rHe3y2j852TPDuX7zJWvz6/k9DwsUqcEndKEEn1qy4ny+pmbXtMx3mfq+mxREUiI9IOPKnu2R8wlRjCLlO1RzhZSm7Jby4paJWPo9F9nl01dt5vExHeZ26+ns4ss8t536Q07PpXGAAAAzu2a+Cm+pzXovyPO4jHSvu1xebL4WrapBrlKNvM8q3SG0T1e5ZfPepQfXGP0PpMU70if5Oa0bWlILqgAAAAAAAAAAAAAAAADyvb5/tc+6H8qJhz5mRmXcVnJkspRMfHR+DLVcuojtLzTGUt2pOP2ZSS8GYz3fQYrc1It6w4kNGr9nTj77Eb6bj+h4jfS1cbwvbttc8vivN9nTl789dm+DvO/pJKed4OLth8tjNvoutOVVt/+vTyJnS6m0b5c+0f7YiP1Rz0jtX81thc0zWUfgw6oQ/004UI27HV/M5/4fQ83xWm8+82n8o/ZF7ZuX4fhj2iPq7Twlaf7/Fx46rfnVfklu+p24Yiv3OCY94iv16/o8vLkrP3maPlMz9OjpSweHjq6k392nH+pnVFdVb/TX87f/LknJpY7c1vyiP6y9Jw1vdwtpuxt3WR8jqKzF7RPrL63HMcsbekBs8q8dWzN7YUv3U+2UX6NfifSf/ncn3mP2n+k/wBHj8Wp4LfJ6Hc+iQ4V8ZTh05xj3ySflqBDnn1L5d+f8MH9XYre9aRvaYj3nYjr26uE85qvoUVHtnL+mP5nFk4npqfi39uv9mkYck+SmzXDOu1KvWskuEY8Iruu9e048nFJy/DipM+/7R+6/wDDbdb2RaH6LRd4JyktG23/AGFdLqs/jjaP+/NSdRp8Xad5bnYLO6tapOEmtyELxVldO6Wq5cT2qU5KxX0YVyzkmZbUsuAAAAAAAAAAAAAAAAAPJ9un+2Vfu/yxJhz5mVmXhw2cmSzlHxq+DusTDHNHwvPM/hbET7bPzSM7d3q6Kd8NVcVdbS7D1XCrVkrO9JwaaTi4za3k0+5GeTTU1ERW+/Sd+k7dYcuq1V9PWLU269OrUwxs4rdg1BdVOMaa8oJExw/TxO813n/dvb67vJvxHU26c+3t0+iPObbu3d9bOusRWNqxtDlta1p3tO5tyVdj6eoWrHVsMLnkYwhFp/DCEZPhqklw6z53U8LyXta9ZjrMzt831GDiWOtK1tv0iN/yTYZpTfzLx4Hg5+HamtutJ+XX6PRpqsNo6Wg3F1qFSO7OUWuD6VrNaNMabFrMGSL4qW3/AOM9UZrYMleW9o29zMRmdJ9OtKXZvyt/xjZHsRl4rk7UiPlH9Zctsujr3v8Ar+yJ/i1CPRh6L6l/8P4jl+8y7fP9tmU8R0lPDG/y/dyqbQS+WCXfxNKcBpvvkvM/9+bG/GZ/BX80SrmtaXzW7uB34+F6XH+Hf36uS/EtRfz29kWU5PVtnbWtaxtWNnLa97+KZlJwODqVJbtOEpvqim36CZa48dp7Q9P2E2frYdynVSjvxso3vJcU+NuHqZy9LFSax1bENQAAAAAAAAAAAAAAAAB5Ltuv2yrfrX0ViYc2Zl5l4cVnJkspcsSvgfcyYUv4ZZPNMqVWe9ezsl2FbV3lbTaqcVeXbdXf4A78ait2JtleV2f4hHlVcZHgI03PdbbcVe9ra9RekbS4tXntlp1jzWTZo4DXIhaIMcxuts6YWp8ce8jdateq1IbuFd8S9XNmnqSKJVrEy6Rg3oVmW1ccys8Js/iqnQw9V357kkv+T4FZtDorpsk+S9wXs8xk+koU1/qnd+ULlZu6K6K/mto7BYair4rGRj1pbtPyc27+RXmlvGkpXxSX9IyTD9GLryXZKf8ANaDHWU82CnZzxHtDaW5hsNCnHk5cf/iNkvNjlJ1XlWFrsFm1bEVqkq1RytBWXBRXxLSK4IiW+K026y25DUAAAAAAAAAAAAAIAAAHi3tQ2zy+OKcIVJ1KtO1OsqcFKEZRfG9RyXFaNJS0twaEM8lOaGewmNp1o79KSkufWn1Napl4l5+Ss1nq6FmEmzXB9zCs9mdru1ibMKRujzmUmW0Vd8slxn/Cvqiad1c0fAkzkaOaIUOI2hj8sG+1uxnN3p04db8UoFbPKr0tHuV36leaXVXQ4o79XXIsXOWKpb02/i0vw0fIV7pzYqUxTyw9ANXlI9fUtVy5vEvNks5o4ecnXw8a8ZJWTjFyjJaNb3Czu7+BW9Zl16PPTHvzRu1L9pFOHChgox6ryUfSMfxM+SXfOvrHaEDFe0jGS6KpU+6Lk/OTa9CeRlOvtPZSYzabGVeniaj7FLcXlCyJ5YZW1WSfNVynd3er1fMnZlN5kKROyOZ1plZa06vRvZfTe9VfVGC82/yM5epgjo9AIblAAAAAAAAAQAAAAAAodu81lhctxVeDtOnRn7t9U5fDF+DkmB4jsF7MqOKwaxOKnVUq+86Sg0rRu0pSbTu2033AUONyqeUZh7qpLeo1l8NS1lKF+Da5Si+D/uTEsstOerStcLrino1xTLxLzbVMJZTCgxcNV2smesMKztZW7k3yt4mW0uneseaZllNpzbfy8u9cy9I2lnntE06Q61mWlz1ZfE5S0/hd+/gzGej2seriY+KEGrRlHVNB1VvW3aVhs3B/pVJ2dt7W3DRk17sdTaPs5h6IbPGRq2permzeIwlkVSI2Wix6YXiTkyrSDkiN2sVdIRI3aVol4eBSZdOOr1j2f4Tcwrnzqyb8I8F63KPRpG0NOFwAAACgAAAgAAAACNgNAyvtToOpk2MiuVFz8INTfpFgZ72f4lTyvCuD0pRi7dcG4y9Uwhnfbjg1PA06tlvUayV+e7Ui015xi/AJeSZPtBVocL70Psvl3dRO7DJhi3WOktxl2ZU60FKN4710k1a7WqT5lolxZMc16TCJjaXxN9fE0effpZG93Hnd+hGyYtDpBpKVlbh+KERsWtvGyJUqETKa1RarM5dFYRp1F3+pXdtFLJOU1b14K3P8GTWesIyU2rM7tabuNHral47OXL4jCWZGwGSmQs5yqEbrRVJwda6t1FLOzDvMbSnUyrpiFlgKLlJRSu5NJd74IrLpx1e25fh1TpQpr5IxXlq/Mq7UgAAAAAAAAAAAGtgIAANbAqM+q/qpxaW7OMoyvo1JWa8mB4nsNtDHLq9XL8XLdpqblh6kuik+t8k1Z35O4Dfa/tXQq0IYahUjUbmqlVwalGKimox3lwu27+HaEPJwltcjxCp4aNN87ya7Xp42sETETG0rOljoS4Sdn28/EvFnm5tJO+9Y3g+eEi9Hb1L7uG2LY6nhYpWfHtBFI26uNXALl5MKzSY7Sg18uXVb6ETSJTGW9e6NLAleReM7vl+HSqRfUyYrtJOTdf3Lqo1WXFl4cl+tpc3IlU1yITs41ZlZletVZWxjbtBOXdp5mU337O2mCIje07JeVyqRbco2TXBX4kxW09ycmOk/DO64o4t36Pky3IrGr69noPs5wKq1vePSilKz13nwjw834GUxs9bBMXjmh6aQ6S3AW4CgAAAAAAwGgIAANAbJgR8TSUlZgee7a+zqji/id4zj0ZR4O2tmtGgPKsy9mGJpN2nGS7U4v8V6gQIbH1YO8le3kBKeWSWqA5TwjQDadSpDoya7OXkN1L4638UJdHOGunHxj+TLRZy30VZ8MrGhi4T6Mk+zR+ReJiXHfBkp3h2JYuc6EXyt3EqTSJcoYZqSeqQViu0pNSpZEwm9toQpVCd3NEGSqDdaKuM6xWZaRRGm3J24pPV9hTfedm8Vikcysxude7e5SjG0dW0Rz7dnXi0X2kc2SZ6pmU7QxlJRqpRb0d/hff1Fq38pY59BNPip1j0WuI2loQ4Jr7vH6CZgx4ssx8NNnqHsqwVKvGONp4jespRnSjdOEmuMKvo9LPg7lJnd6OHT8k80z1emJlXScmAAKAqYCgAAAkgGgACMBAGyQDWgOcogRMTgYzXFAZ3Mdmk+MQMzj8ha1iBQ4vKOwCmxWWtcgKuvg2uQEOpQaA6UcdVhzuuqXH11JiZhjfBjv3hPo5zF9JOPdxX5lou5L6GfwymQxcJdGSfjx8i3NDmvp8lfJxrVGyeaHNOC8z2RpS62l3tETeG1dJknyM34/a8uJXndFNDbzd6ChfjcrMuqmkrUZrBKEpU1wjBt8Vyu2TE7RLPPp7WyV2jpCs2D2QePqSlObhRp235K29KT0jG/Bdbfdw4lXc0W1fstVOi6uDnOfu03OnOzk0tXBxSu+y3H0CXmIG29ke07wWYwTdqOKcaNdcuLtCffGT16nID6kTAcgHJgKAoDkAAACNANAAABGgEAa4gNaAa4gNcQOFbDRlqgKfHbPwlorAZvMNm5LlcDOY3I31AUeKyhrkBVV8ua5AQamEYHCWHAY6bAFTA6RTA707gPxkm6NRdcJfQDW+yKqlgpJa++nvf8YW9Ahv6dZp2YHgO3+XRoZjWhBWjKSqQXUppSt5toJZ5O3FctAPsPIM3hWw9Ge8t6dKlKV+HFxTfqBbxYDgHAADogKAAACNAJYBAAAsAjQCWARoBrQDXEBrgBznTT1QELFZXCeqAocfswn0QM3j9nZL5QKHFZJ2AVdfKH1AQ6mWPqA5PL31AJ+gvqAcsI+oB3uevnqBG2DzZYTFVMPVlanWa3ZPRSXRb7GnbvsES9ZhUA8Q9oWYRr5hVlBpxhu001o9xWb87hLP4ejKc4wirynKMYrrcnZLzYH05kOWT93CCTShGEb6dFJfgBs8FQ3Ek3cCUgHAAD0AAAAAAACWASwAAgAAlgEsAjQCboCOIDXEBHADlUw6eqQFfisjpz5AUuN2U5x8gM9icks+MbAQqmUdgEeeU9gHCWV9gHCplb6gM9nex8q3GnwmutNprqutAM9jauZ4eHuZyrxhpa8mrdSktF2XAqMPl1WfRg/oB6x7LNmcPQqLEYhSqVf8vh8FNtcXbWUtePpzA9woRVlbQCRGID0gHAKkAoAAAAAAAAAAAJYBLAIAAABYBLAG6Am6Am6Am6AboHKthYy6STAq8Rs9B9F2Ajf/mP9foA+Oy1PnJvyQHens5QXy37wJlLLqcejFLwQDcRlVKorThGXel6MCvex+F5Qs+u/wCYE3B7PYenpC/fx9NALOFNJWSSXUuADkgHWAUAAAAAA//Z"                    
                    />
                    <div
                        className='w-1/2'
                    >
                        <h4
                            className='font-medium text-base'
                        >
                            UberAuto
                            <span>
                                <i className='ri-user-3-fill'>2</i>
                            </span>
                        </h4>
                        <h5
                            className='font-medium text-sm'
                        >
                            3 mins away
                        </h5>
                    <p
                        className='font-medium text-xs text-gray-600'
                    >Affordable, Auto rides</p>
                    </div>
                    <h2
                        className='text-xl font-semibold mr-2'
                    >
                    ₹118.68
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home