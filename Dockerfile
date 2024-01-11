# กำหนด Node.js เป็น base image
FROM node:16

# สร้างไดเรกทอรี app และกำหนดให้เป็น working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (ถ้ามี)
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์และไดเรกทอรีของแอพพลิเคชัน
COPY . .

# เปิดพอร์ตสำหรับการสื่อสาร
EXPOSE ${SERVER_PORT}

# รันคำสั่งเพื่อเริ่มแอพพลิเคชัน
CMD ["npm", "start"]
