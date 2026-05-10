# React Native Fundamental

Tài liệu cơ bản dành cho người mới bắt đầu học React Native với Expo và Android Studio.

---

# 1. Tạo Project React Native (Blank Template)

## Cài đặt Node.js

Tải Node.js tại:

- https://nodejs.org

Kiểm tra sau khi cài:

```bash
node -v
npm -v
```

---

## Tạo Project React Native với Expo

Chạy lệnh:

```bash
npx create-expo-app@latest RNCourse --template blank
```

## Giải thích

| Thành phần         | Ý nghĩa                              |
| ------------------ | ------------------------------------ |
| `npx`              | Chạy package mà không cần cài global |
| `create-expo-app`  | Tool tạo project React Native        |
| `@latest`          | Dùng phiên bản mới nhất              |
| `RNCourse`         | Tên project                          |
| `--template blank` | Tạo project trống cơ bản             |

---

## Chạy project

Di chuyển vào project:

```bash
cd RNCourse
```

Khởi động project:

```bash
npx expo start
```

---

# 2. Giải thích cấu trúc project React Native

## Cấu trúc cơ bản

```txt
RNCourse/
│
├── assets/
├── node_modules/
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## Ý nghĩa từng file/folder

### `assets/`

Chứa:

- hình ảnh
- icon
- font
- splash screen

Ví dụ:

```txt
icon.png
splash-icon.png
```

---

### `node_modules/`

Chứa toàn bộ thư viện được cài bằng npm.

KHÔNG chỉnh sửa trực tiếp.

KHÔNG push lên GitHub.

---

### `App.js`

File chính của ứng dụng.

Ví dụ:

```jsx
import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
}
```

---

# Giải thích các tag/components cơ bản

## `<View>`

Tương tự:

- `div` trong HTML

Dùng để:

- chứa component
- layout
- căn chỉnh giao diện

Ví dụ:

```jsx
<View>
  <Text>Hello</Text>
</View>
```

---

## `<Text>`

Dùng để hiển thị text.

React Native KHÔNG cho text nằm trực tiếp trong `<View>`.

Ví dụ:

```jsx
<Text>Hello World</Text>
```

---

## `<Image>`

Hiển thị hình ảnh.

Ví dụ:

```jsx
<Image source={require("./assets/icon.png")} />
```

---

## `<Button>`

Tạo nút bấm.

Ví dụ:

```jsx
<Button title="Click Me" onPress={() => alert("Hello")} />
```

---

## `<TextInput>`

Ô nhập dữ liệu.

Ví dụ:

```jsx
<TextInput placeholder="Enter your name" />
```

---

## `StyleSheet`

Dùng để viết CSS cho React Native.

Ví dụ:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
```

---

## `app.json`

File cấu hình ứng dụng Expo.

Ví dụ:

- tên app
- icon
- splash screen
- orientation

---

## `index.js`

Điểm bắt đầu của ứng dụng.

Expo dùng file này để chạy `App.js`.

---

## `package.json`

Quản lý:

- dependencies
- scripts
- version project

Ví dụ:

```json
"scripts": {
  "start": "expo start"
}
```

---

# 3. Hướng dẫn cài đặt Android Studio

## Tải Android Studio

- https://developer.android.com/studio

---

## Khi cài đặt cần chọn

- Android SDK
- Android SDK Platform
- Android Virtual Device (AVD)
- Android Emulator

---

## Kiểm tra virtualization

Mở:

```txt
Task Manager → Performance → CPU
```

Kiểm tra:

```txt
Virtualization: Enabled
```

Nếu là `Disabled`:

- cần bật trong BIOS.

---

# 4. Tạo máy ảo Android và iOS

## Android Virtual Device (AVD)

Mở Android Studio:

```txt
More Actions
→ Virtual Device Manager
→ Create Device
```

---

## Khuyên dùng cho người mới

| Setting      | Giá trị            |
| ------------ | ------------------ |
| Device       | Pixel 6 / Pixel 7  |
| API          | API 34             |
| System Image | Google APIs x86_64 |
| RAM          | 2048MB             |
| Graphics     | Hardware           |

---

## Chạy máy ảo

Trong Device Manager:

- Nhấn nút ▶ Play

---

## Chạy app trên Android Emulator

Trong terminal:

```bash
npx expo start
```

Sau đó nhấn:

```txt
a
```

Expo sẽ mở app trên Android Emulator.

---

# iOS Simulator

## Điều kiện

iOS Simulator CHỈ hoạt động trên:

- macOS
- MacBook
- iMac

KHÔNG chạy trên Windows.

---

## Cài đặt

Cài:

- https://developer.apple.com/xcode/

Sau đó mở:

```txt
Xcode
→ Open Developer Tool
→ Simulator
```

---

## Chạy app trên iOS

Trong terminal:

```bash
npx expo start
```

Sau đó nhấn:

```txt
i
```

---

# Git Ignore cho React Native

Ví dụ `.gitignore`:

```gitignore
node_modules/
.expo/
dist/
web-build/
.env
```

---

# Một số lệnh hữu ích

## Cài package

```bash
npm install package-name
```

---

## Chạy Android

```bash
npm run android
```

---

## Chạy web

```bash
npm run web
```

---

## Reset cache Expo

```bash
npx expo start -c
```
