import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setList([...list, { id: Math.random(), task }]);
    setTask("");
  };
  const handleDelete = (id) => {
    const ulist = [...list];
    ulist.splice(id, 1);
    setList(ulist);
  };
  return (
    <div className="bg-[#2C2C2C] w-screen h-screen overflow-auto">
      <div className="flex flex-col gap-32 p-2 md:p-4 lg:p-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div class="flex flex-row gap-6 items-center">
            <div class="border-solid border-light border-t-2 border-r-[0] border-b-[0] border-l-[0] shrink-0 h-0 w-[10px] md:w-[20px] lg:w-[30px]"></div>
            <div class="text-[#FFF] text-left font-serif font-normal text-xl md:text-2xl lg:text-5xl">
              TO-DO NOW
            </div>
            <div class="border-solid border-light border-t-2 border-r-[0] border-b-[0] border-l-[0] shrink-0 h-0 w-[10px] md:w-[20px] lg:w-[30px]"></div>
          </div>
          <div class="flex flex-row items-center justify-start gap-4 md:ap-6 lg:gap-8">
            <div class="border-solid border-light border-t-2 border-r-[0] border-b-[0] border-l-[0] shrink-0 h-0 w-24 md:w-40 lg:w-48"></div>
            <svg
              class="shrink-0 overflow-visible w-4 h-4 md:w-8 h-8"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5135 20.4265H12.5135V16.4265L24.5135 4.42651L28.5135 8.42651L16.5135 20.4265Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.5135 7.42651L25.5135 11.4265"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.5135 15.4265V26.4265C27.5135 26.6917 27.4082 26.9461 27.2206 27.1336C27.0331 27.3212 26.7787 27.4265 26.5135 27.4265H6.51352C6.2483 27.4265 5.99395 27.3212 5.80641 27.1336C5.61888 26.9461 5.51352 26.6917 5.51352 26.4265V6.42651C5.51352 6.1613 5.61888 5.90694 5.80641 5.71941C5.99395 5.53187 6.2483 5.42651 6.51352 5.42651H17.5135"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="border-solid border-light border-t-2 border-r-[0] border-b-[0] border-l-[0] shrink-0 h-0 w-24 md:w-40 lg:w-48"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-9 ">
          <div className="flex flex-row items-center pl-20">
            <input
              className="bg-white h-[40px] rounded-full text-left p-4 w-[270px] md:w-[480px] lg:w-[720px]"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
            <button
              className="bg-[#4F4F4F] w-[90px] h-[40px] rounded-full text-white -translate-x-16"
              onClick={handleAddTask}
            >
              <div className="font-serif">Add Task</div>
            </button>
          </div>
          <div class="border-solid border-[#ffffff] border-t border-r-[0] border-b-[0] border-l-[0] h-0 ml-4 w-[95%] md:w-[60%]"></div>
          <div className="p-8 md:p-16 lg:p-24">
            {list.length > 0 &&
              list.map((li) => (
                <div className="flex flex-col p-2" key={li.id}>
                  <div className="flex flex-row items-center pl-8">
                    <div className="bg-[#222222] h-[38px] rounded-lg text-white p-1.5 w-[270px] md:w-[480px] lg:w-[720px]">
                      {li.task}
                    </div>
                    <button
                      className="bg-gray-300 rounded-lg -translate-x-4"
                      onClick={() => handleDelete(li.id)}
                    >
                      <svg
                        class=""
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.7969 6.98438H5.20312"
                          stroke="#222222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3282 12.3281V19.4531"
                          stroke="#222222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.6719 12.3281V19.4531"
                          stroke="#222222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.0156 6.98438V23.9062C23.0156 24.1425 22.9218 24.369 22.7547 24.536C22.5877 24.703 22.3612 24.7969 22.125 24.7969H7.87497C7.63876 24.7969 7.41223 24.703 7.2452 24.536C7.07818 24.369 6.98434 24.1425 6.98434 23.9062V6.98438"
                          stroke="#222222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.4531 6.98438V5.20313C19.4531 4.73071 19.2655 4.27764 18.9314 3.94359C18.5974 3.60954 18.1443 3.42188 17.6719 3.42188H12.3281C11.8557 3.42188 11.4026 3.60954 11.0686 3.94359C10.7345 4.27764 10.5469 4.73071 10.5469 5.20313V6.98438"
                          stroke="#222222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
