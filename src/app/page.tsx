'use client'

import { Base } from '@/components/Base/Base';
import { log } from 'console';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { isElement } from 'react-dom/test-utils';
import { text } from 'stream/consumers';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState("");
  const [setumei, setSetumei] = useState("");
  const [bothTab,setBothTab] = useState(true)
  const [thouthTab,setThouthTab] = useState(false)
  const [data,setData]= useState<{a:string,b:string,c:boolean}[]>([]);
  

  const onChangeTitle = (e:any) => {
    setTitle(e.target.value);
  };

  const onChangeSetumei = (e:any) =>{
    setSetumei(e.target.value);
  };

  const onSubmit = (e:any)=>{
    e.preventDefault();
    if(title !== ""){
      setIsSubmitted(true);
    }else{
      setIsSubmitted(false);
    }
  };

  return (
    
  <div>
    <Base>
      <form onSubmit={onSubmit}>
        <div className='text-[30px] font-bold ml-5'>タスク入力</div>
        <div className='ml-10 mr-10'>
          <div className='mt-5 w-2/5'>
            <div className='ml-3'>
              タイトル
              <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                必須<br/>
              </text>
            </div>
            <input
              className='bg-gray-300 appearance-none border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              type='text'
              defaultValue=""
              placeholder='タイトル入力'
              onChange={onChangeTitle}
              />
          </div>
          <div className='mt-2'>
            <div className='ml-3'>
              説明<br/>
            </div>
            <textarea
              id='other'  cols={30} rows={8} 
              className='bg-gray-300 appearance-none border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              placeholder='説明入力'
              onChange={onChangeSetumei}
              />
          </div>


          <div className='flex mt-2'>
            <button
              className='ml-3 px-2 py-1 bg-gray-100 border border-blue-800 font-semibold hover:bg-blue-100'
              type='submit'
              onClick={()=>{
                const newData = {a:title,b:setumei,c:(false)};
                const list = [...data,newData];
                setClick(true)
                if(title !== ""){
                  setData(list)
                }
              }}>
              追加
            </button>

            {click&&
              <div className='ml-5'>
                {isSubmitted?(
                    <div>
                      タスクを追加しました
                    </div>
                  
                ):(
                  <p className='text-red-600'>
                    タイトルを入力してください
                  </p>
                )}
              </div>
            }
          </div>
          
          <div className='tab-area'>
            <div className='tab-list mt-5' role='tablist'>
              <button 
                className='tab -active js-tab font-semibold bg-gray-400 '
                type='button'
                role='tab'
                id='tab1'
                onClick={()=>{
                    setBothTab(true)
                    setThouthTab(false)
                }}>
                {bothTab?(<h1 className='ml-1 mr-1 text-white' >全て </h1>):(<h1 className='ml-1 mr-1'>全て </h1>)}
              </button>
              <button 
                className='tab -active js-tab font-semibold ml-0.5 bg-gray-400 '
                type='button'
                role='tab'
                id='tab2'
                onClick={()=>{
                  setBothTab(false)
                  setThouthTab(false)
                }}>
                {!bothTab&&!thouthTab?(<h1 className='ml-1 mr-1 text-white' >未完了 </h1>):(<h1 className='ml-1 mr-1'>未完了 </h1>)}
              </button>
              <button 
                className='tab -active js-tab font-semibold ml-0.5 bg-gray-400 '
                type='button'
                role='tab'
                id='tab3'
                onClick={()=>{
                  setBothTab(false)
                  setThouthTab(true)
                }} >
                {!bothTab&&thouthTab?(<h1 className='ml-1 mr-1 text-white' >完了 </h1>):(<h1 className='ml-1 mr-1'>完了 </h1>)}
              </button>
                <label className=''/>
                <div className='mt-5'>
                {bothTab&&<div>
                  {data.map((chapter,index)=>(<div key={index} className='mt-3 flex'>
                      <div className=' w-4/5 bg-gray-200 border-gray-400 flex'>
                        <input className=' ml-5' type="checkbox" defaultChecked ={chapter.c} onClick={()=>{chapter.c=!chapter.c}}/>
                        <div className='ml-2 mt-3 mb-3 block'>
                          {!chapter.c?(<div>{'タイトル:'}{chapter.a}</div>):(<s>{'タイトル:'}{chapter.a}</s>)}
                          {!chapter.c&&<div>{'説明:'}{chapter.b}</div>}
                        </div>
                      </div>
                      <button  className=' border bg-red-500 text-white' onClick={()=>{
                        const list = data.filter((chapter)=>(data.map((chapter)=>chapter.a)[index] != chapter.a || data.map((chapter)=>chapter.b)[index] != chapter.b))
                        setData(list)
                      }}>
                        <h1 className='ml-1 mr-1'>削除</h1>
                      </button>
                    </div>))
                  }</div>}
                {!bothTab&&<div>
                  {data.filter((chapter)=>(chapter.c==thouthTab))
                  .map((chapter,index)=>(<div key={index} className='mt-3 flex'>
                    <div className=' w-4/5 bg-gray-200 border-gray-400 flex'>
                        <input className=' ml-5 ' type="checkbox" defaultChecked ={thouthTab} onClick={()=>{chapter.c=!chapter.c}}/>
                        <div className='ml-2 mt-3 mb-3 block'>
                          {!chapter.c?(<div>{'タイトル:'}{chapter.a}</div>):(<s>{'タイトル:'}{chapter.a}</s>)}
                          {!chapter.c&&<div>{'説明:'}{chapter.b}</div>}
                        </div>
                      </div>
                      <button  className=' border bg-red-500 text-white' onClick={()=>{
                        const list = data.filter((chapter)=>(data.map((chapter)=>chapter.a)[index] != chapter.a || data.map((chapter)=>chapter.b)[index] != chapter.b))
                        setData(list)
                      }}>
                        <h1 className='ml-1 mr-1'>削除</h1>
                      </button>
                    </div>))
                  }
                </div>}
                <div className='mt-5'/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Base>

  </div>
  )
}
