<!-- Token line -->
<!-- sbgUpn2UGSCWs81res3LO3urNXdrCATNmndhuxjboat -->

<!-- comment มี 3 แบบ -->
<!--* แบบ 1 -->
<!--! แบบ 2 -->
<!--? แบบ 3 -->

# Github Action การทำ Deploy อัติโนมัติ
### องค์ประอกบที่ต้องมี
1.line token https://notify-bot.line.me/doc/en/
2.github action https://docs.github.com/en/actions/quickstart
3.source code

### วิธีการทำ

1. สร้างโฟล์เดอร์ ``` .github ```
2. สร้างโฟล์เดอร์ ``` .github ``` ชื่อ ``` workflow```
3. สร้างไฟล์ ``` pang-action.yml```
4. copy code ```github-actions-demo.yml file:```
5. ตัวอย่าง source code

```yml   
name: GitHub Actions Demo #! ชื่อ โครงการ
on: [push]
branches: [dev] #! ทำงานเฉพาะ branches
jobs:
  First-Job: #! ชื่อ job
    runs-on: ubuntu-latest #! จำลอง os ที่ใช้งาน
    steps:
      - run: echo "🎉 Hello Pang" #! รันคำสั่ง ubuntu ให้ echo ออกมา และเป็นคำสั่งใน os
      - uses: snow-actions/line-notify@v1.0.0 #!uses คือการใช้ lib
        with: #!ตัวแปรที่ต้องส่งไปกับ lib (props)
          access_token: sbgUpn2UGSCWs81res3LO3urNXdrCATNmndhuxjboat
          message: 🎉 Pang ตื่นนอน

```

*****หมายเหตุ****** กรณีอยากให้แสดง 2 message ใน job

```yml   
name: GitHub Actions Demo #! ชื่อ โครงการ
on: [push]
branches: [dev] #! ทำงานเฉพาะ branches
jobs:
  First-Job: #! ชื่อ job
    runs-on: ubuntu-latest #! จำลอง os ที่ใช้งาน
    steps:
      - run: echo "🎉 Hello Pang" #! รันคำสั่ง ubuntu ให้ echo ออกมา และเป็นคำสั่งใน os
      - uses: snow-actions/line-notify@v1.0.0 #!uses คือการใช้ lib
        with: #!ตัวแปรที่ต้องส่งไปกับ lib (props)
          access_token: sbgUpn2UGSCWs81res3LO3urNXdrCATNmndhuxjboat
          message: 🎉 Pang ตื่นนอน
      - uses: snow-actions/line-notify@v1.0.0 #!uses คือการใช้ lib
        with: #!ตัวแปรที่ต้องส่งไปกับ lib (props)
          access_token: sbgUpn2UGSCWs81res3LO3urNXdrCATNmndhuxjboat
          message: 🎉 Pang ตื่นนอน2


```

# Database With Docker

1. สิ่งที่ต้องมี คือไฟล์ ``` docker-compose.yml ```
2. extension ของ vscode ชื่อ ```MySQL``` (มีติ๊กถูกสีฟ้า)
3. เปิด Terminal ใหม่โดยการกด ```ctrl+shift+p``` พิมพ์ ```create New Terminal in Editor Area```
4. ลงdocker ใน vscode ใน Terminal โดยคำสั่งนี้ 
   <!--คำสั่ง sh, bash -->
 ``` sh
 docker-compose up
 ```


# คำสั่ง MySQL พื้นฐาน
xxxx = ชื่อตาราง
1.การเลือกข้อมูลมาโชว์
```sql
SELECT xxxx FROM xxxxx 
```
อีก 1 วิธีที่เอาข้อมูลทั้งหมดใน xxxxx
``` sql
SELECT xxxx.* FROM xxxxx 
```
2.การเปลี่ยนชื่อคอลัมน์ คำสั่ง AS
การเพิ่มคอลัมน์
``` sql
SELECT product.*,product.price*0.07 AS vat FROM product
```
การเปลี่ยนชื่อในคอลัมน์
``` sql 
SELECT product.price AS ma_price ,product.price*0.07 FROM product
```