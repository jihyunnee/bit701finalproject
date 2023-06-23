import React, { useState } from 'react';
import '../App.css';
import DaumPostcodeEmbed from 'react-daum-postcode';
function MemberForm(props) {
    const [openPostcode, setOpenPostcode] = useState(false);

    const handle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode(current => !current);
        },

        // 주소 선택 이벤트
        selectAddress: (data) => {
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `)
            setOpenPostcode(false);
        },
    }

    return (
        <div>
            <h1>회원가입 폼</h1>
            <button onClick={handle.clickButton}>toggle</button>

        {openPostcode && 
        <DaumPostcodeEmbed 
                onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어 
        />}
        </div>
    );
}

export default MemberForm;