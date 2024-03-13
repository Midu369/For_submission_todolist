'use client'

import { Base } from '@/components/Base/Base';
import { log } from 'console';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { isElement } from 'react-dom/test-utils';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState("");
  const [setumei, setSetumei] = useState("");
  const [bothTab,setBothTab] = useState(true)
  const [yetTab,setYetTab] = useState(false);
  const [comprateTab,setComprateTab] = useState(false);
  const [data,setData]= useState<{a:string,b:string,c:boolean}[]>([]);
  //const data:{a:string;b:string}[];
  

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
        <div className='text-[30px] font-bold ml-20'>My task</div>
        <div className='ml-10'>
          <div className='mt-5 w-2/5'>
            タイトル
            <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
              必須<br/>
            </text>
            <input
              className='bg-gray-300 appearance-none border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              type='text'
              defaultValue=""
              placeholder='タイトル'
              onChange={onChangeTitle}
              />
          </div>
          <div className='mt-5'>
            説明<br/>
            <textarea
              id='other'  cols={30} rows={8} 
              className='bg-gray-300 appearance-none border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              placeholder='説明'
              onChange={onChangeSetumei}
              />
          </div>


          <div className='flex mt-5'>
            <button
              className='px-2 py-1 bg-gray-100 border border-blue-800 font-semibold hover:bg-blue-100'
              type='submit'
              onClick={()=>{
                setClick(true)
                const newData = {a:title,b:setumei,c:(false)};
                const list = [...data,newData];
                      setData(list)
                }}
              >追加
            </button>

            {click ? (
              <div className='ml-5'>
                {isSubmitted?(
                    <div>
                      タスクを追加しました
                    </div>
                  
                ):(
                  <p className='text-red-600'>
                    必須項目を入力してください
                  </p>
                )}
              </div>
            ):(
              <p></p>
            )}

          </div>
          
          <div className='tab-area'>
            <div className='tab-list mt-5' role='tablist'>
              <button 
                className='tab -active js-tab font-semibold bg-gray-400 peer'
                type='button'
                role='tab'
                id='tab1'
                onClick={()=>{
                    setBothTab(true)
                    setYetTab(false)
                    setComprateTab(false)
                    console.log('1');
                }}
                >全て</button>
              <button 
                className='tab -active js-tab font-semibold ml-0.5 bg-gray-400 '
                type='button'
                role='tab'
                id='tab2'
                onClick={()=>{
                  setBothTab(false)
                  setComprateTab(false)
                  setYetTab(true) 
                  console.log('2');
                }}
                >未完了</button>
              <button 
                className='tab -active js-tab font-semibold ml-0.5 bg-gray-400 '
                type='button'
                role='tab'
                id='tab3'
                onClick={()=>{
                  setBothTab(false)
                  setComprateTab(true)
                  setYetTab(false) 
                  console.log('3');
                }} 
                >完了</button>
                <label className=''/>
                <div className='mt-5'>
                {bothTab&&<div>
                  {data.map((chapter,index)=>(<div key={index} className='mt-5 w-4/5 h-20 bg-gray-200 border-gray-400 flex'>
                    <input className='mt-6 ml-5' type="checkbox"></input>
                    <div className='ml-2 mt-3'>{'タイトル:'}{chapter.a}<br/>{'説明:'}{chapter.b}</div>
                    </div>))
                    }</div>}
                {yetTab&&<div>
                  {data.filter((chapter)=>(chapter.c!=true))
                  .map((chapter,index)=>(<div key={index} className='mt-5 w-4/5 h-20 bg-gray-200 border-gray-400 flex'>
                    <input className='mt-6 ml-5' type="checkbox"></input>
                    <div className='ml-2 mt-3'>{'タイトル:'}{chapter.a}<br/>{'説明:'}{chapter.b}</div>
                    </div>))}</div>}
                {comprateTab&&<div>
                  {data.filter((chapter)=>(chapter.c==true))
                  .map((chapter,index)=>(<div key={index} className='mt-5 w-4/5 h-20 bg-gray-200 border-gray-400 flex'>
                    <input className='mt-6 ml-5' type="checkbox"></input>
                    <div className='ml-2 mt-3'>{'タイトル:'}{chapter.a}<br/>{'説明:'}{chapter.b}</div>
                    </div>))}</div>}
                  <div className='mt-10'/>
                </div>
            </div>
            <div>
              
            </div>

          </div>
        </div>
      </form>
    </Base>

  </div>
  )
}
