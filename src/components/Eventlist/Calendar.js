import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useRef, useState } from "react";
import AddEvent from "./AddEvent";
import { height } from "@mui/system";
import Button from "@mui/material/Button";
import styled from "styled-components";
import com from "../../bridge/fetch";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  alignitems: start;

  & .calendar {
    width: 60%;
    height: auto;
  }
  & .Todo {
    width: 300px;
    & h2 {
      text-align: center;
    }
  }
`;
const Calendar = ({ readIn }) => {
  const [events, setEvents] = useState([]);
  
  function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  console.log(readIn)
 
  
//  const myEventCalendar = getMapData.props.ondate
  
 

  // const calendarRef = useRef(null);

  //   const [calEvents, setCalEvents]  = useState([
  //     {
  //         id : 1 ,
  //         // title: 'exbition',
  //         color: 'blue',
  //         start: '2022-09-19T11:00',
  //         end: '2022-09-23T13:00',
  //         // constraint:'학원 수업'  // event 수정 제한
  //     },
  //     {
  //         id : 2,
  //         // title: '학원 수업',
  //         color: 'red',
  //         start: '2022-09-21T11:00',
  //         end: '2022-09-22T13:00',
  //         // constraint:'학원 수업'  // event 수정 제한
  //     }
  // ]);

  // window.calevent = calEvents;

  return (
    <>
      <div style={{ position: "relative", zIndex: 0 }}>
      {/* <FullCalendar
              // ref={calendarRef}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
           
              // events={myEventCalendar}
              // height={800}
              // events={calEvents} // calendar event 가져오기
              // selectable={true}  // 달력에서 드래그로 날짜 선택
              // editable={true} // 캘린더 내에서 일정 옮기고 수정
              // locale='ko' // 한국어 설정
              // dayMaxEvents={true} // 하나의 날짜에 이벤트 갯수 제한 넘어가면 more로 표시
              // businessHours={true} // 주말 색깔 블러 처리
            /> */}



         
            <FullCalendar
              // ref={calendarRef}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
  
              events={readIn.map((item)=>{
                return{
                  title: item.location, date: item.ondate, color:getRandomRgb()
                }
              })}
              // height={800}
              // events={calEvents} // calendar event 가져오기
              // selectable={true}  // 달력에서 드래그로 날짜 선택
              // editable={true} // 캘린더 내에서 일정 옮기고 수정
              // locale='ko' // 한국어 설정
              // dayMaxEvents={true} // 하나의 날짜에 이벤트 갯수 제한 넘어가면 more로 표시
              // businessHours={true} // 주말 색깔 블러 처리
            />

   
      </div>
      {/*     
      <AddEvent
        isOpen={eventAddModal}
        onClose={() => setEventAddModal(false)}
        onEventAdded={(e) => onEventAdded(e)}
      /> */}
    </>
  );
};

export default Calendar;
