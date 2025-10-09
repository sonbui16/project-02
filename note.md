I- Media query
1. Kích thước viewport width bao nhiêu là của
    - Desktop
    - Tablet
    - Mobile
2. Tư duy để responsive nó như thế nào
Mobile first: Mobile - Tablet - Desktop 
Desktop first: Desktop - Tablet - Mobile
3. css display property kiểm tra thuộc tính 

4. Bất đồng bộ 
- Synchronous (Đồng bộ)
- Asynchronous ( Bất đồng bộ): 
    1. setTimout, setInterval
    2. DOM Event
    3. XHR, Promise(fetch),
    4. async/await
    5. MutationObserver
    6. requestAnimationFrame
    7. requestIdleCallback
    8. File System (read/write)
    9. HTTP
- Callback 
    + Là 1 hàm dùng làm đối số của hàm khác
    + Sẽ được gọi lại bên trong hàm đó
- Promise: 
    + Nhận vào 1 hàm calback có 2 gtri là resole/reject
        const promise = new Promise( (resole, reject) =>{
            setTimeout (() =>{
                reject("Demo Promise")
            }, 1000 )
        })
    + Lấy ra kết quả của promise
        promise
        .then((value) =>{
            console.log(value);
            return value1 ; Giá trị của return chính là value của resolve tiếp theo
        })
        .then((value1) =>{
            console.log(value1) // undefined nếu phía trên không return
        })
        .catch((err) =>{
            console.log(err)
        })
        .finally(()=>{
            console.log("done")
        })
- Async, await



    + Có 3 trạng thái
        1. Pending (Đang chờ)
        2. Fulfilled (Hoàn thành): tức là khi gọi resole()
        3. Rejected (Thất bại): khi gọi reject()

- Javascrip là ngôn ngữ đơn luồng (Single thread)


5. Redux
- Redux : là quy trình quản lý state
- react-redux : là cầu nối giữa React và redux
- Reduct conceps: 
    + Store : nơi lưu trữ State
    + State: Dữ liệu (thường là Global State)
    + Action: Mô tả hành động sẽ được thực hiện
    + Dispatch: Bắn đi 1 action 
    + Reducer: Nơi nhận state hiện tại + active => Xử lý => Trả ra state mới
- Quy trình: 
    User click trên UI => Event handle => Dispatch action => Reducer nhận state hiện tại + action => Trả ra state mới
    => Re-render UI
    
