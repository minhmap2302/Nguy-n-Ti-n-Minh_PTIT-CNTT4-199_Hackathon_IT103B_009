let currentAppointment = "";
let isAppointmentValid = false;
let totalRevenue = 0;
let totalAppointments = 0;

let treatmentCount = 

do {
    let menuOption = prompt(" Welcome to Lotus Spa/n 1.Nhap va kiem chuan ma lich hen/n 2.Tinh tien lieu trinh cham soc/n 3.Tham dinh ma khach hang may man/n 4.Thoat/n Moi ban chon:");
    switch (menuOptio) {
        case "1":
            if (currentAppointment === "") {
                currentAppointment = prompt("Nhap ma lich hen:").toUpperCase().trim();
                if (currentAppointment.length === "SPA"){
                    if (currentAppointment.length <= 0 && currentAppointment.length >= 6) {
                        isAppointmentValid = true;
                    } else {
                        console.log("Ma lich hen khong hop le. Vui long nhap lai.");
                        currentAppointment = "";
                    }
                } else {
                    console.log("Ma lich hen khong hop le. Vui long nhap lai.");
                    currentAppointment = "";
                }
                
            } else {
                console.log("Ban da nhap ma lich hen truoc do. Vui long chon chuc nang khac.");
            }
            break;
        case "2":
            if (isAppointmentValid == false) {
                console.log("Vui long nhap va kiem chuan ma lich hen truoc khi tinh tien lieu trinh cham soc.");
                break;
            }
            break;
        case "3":
            break;
        default:
            console.log("Lua chon khong hop le. Vui long chon lai.");
            break;

    }
}while (menuOption !== "4");
    

