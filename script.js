document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ typhoon พร้อมแล้ว!');
    
    // ใส่ปี ค.ศ. ปัจจุบันใน Footer อัตโนมัติ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
