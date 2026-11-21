* { box-sizing: border-box; font-family: Arial, sans-serif; }
body {
  margin: 0;
  background: #FFF8DC;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
}
.box {
  background: #FFFFFF;
  width: 100%;
  max-width: 480px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #E8DCC0;
}
h1 { text-align: center; margin: 0; color: #2E7D32; font-size: 26px; }
.count { text-align: center; color: #666; margin: 8px 0 18px; font-size: 14px; }
.row { display: flex; gap: 8px; margin-bottom: 12px; }
input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  background: #FFFDE7;
}
input:focus { border-color: #2E7D32; }
.btn {
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
}
.green { background: #2E7D32; }
.red { background: #C62828; }
.orange { background: #EF6C00; }
.blue { background: #1565C0; }
.full { width: 100%; padding: 12px; margin-bottom: 16px; }
ul { list-style: none; padding: 0; margin: 0; }
li {
  background: #FFFDE7;
  border: 1px solid #E8DCC0;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
}
li span { display: block; margin-bottom: 10px; font-size: 15px; word-break: break-word; }
.btn-row { display: flex; gap: 6px; }
.small { padding: 7px 10px; font-size: 13px; }
.connect { text-align: center; font-size: 12px; color: #999; margin-top: 15px; }
