export default function Home() {
  return (
    <div className=" items-center">
      <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans">
        <section className="text-center py-24 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Biến Ý Tưởng Thành Công Cụ
            <br /> Chrome Extension từ A-Z
          </h1>
          <p className="text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Học cách tạo công cụ cho riêng bạn – hoặc biến nó thành sản phẩm
            kiếm tiền trên Chrome Web Store!
          </p>
          <a
            href="#register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition duration-300"
          >
            🚀 Bắt đầu hành trình ngay
          </a>
        </section>

        <section className="max-w-4xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Bạn sẽ học được gì?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
            <li>Viết Chrome Extension hoàn chỉnh từ 0 đến publish</li>
            <li>
              Làm các tool blocker, auto reply, productivity popup, cảnh báo
              dopamine...
            </li>
            <li>Giao tiếp với Facebook, API, storage, script injection...</li>
            <li>
              Tư duy xây dựng sản phẩm & mô hình kiếm tiền (freemium, SaaS...)
            </li>
          </ul>
        </section>

        <section className="bg-white text-gray-900 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">📚 Nội dung khóa học</h2>
              <ol className="list-decimal list-inside space-y-3 text-lg">
                <li>Hiểu rõ Manifest V3 và cấu trúc Extension</li>
                <li>Tạo giao diện Popup bằng Tailwind + React</li>
                <li>Content Script, Background, Messaging</li>
                <li>Dự án thực chiến: Dopamine Shield Blocker</li>
                <li>Dự án 2: Auto Reply Facebook Comments</li>
                <li>Deploy, publish và marketing sản phẩm của bạn</li>
              </ol>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">👨‍🏫 Người hướng dẫn</h2>
              <p className="text-lg leading-relaxed">
                Mình là <strong>Fullstack Developer</strong> với hơn 5 năm kinh
                nghiệm, từng xây nhiều Chrome Extensions giúp tăng năng suất và
                tạo thu nhập thụ động.
              </p>
              <p className="mt-4 text-lg">
                Mình sẽ không chỉ hướng dẫn code mà còn hướng dẫn bạn cách{" "}
                <strong>biến ý tưởng thành sản phẩm thật sự</strong>, có thể ứng
                dụng hoặc kiếm tiền từ đó.
              </p>
            </div>
          </div>
        </section>

        <section
          id="register"
          className="py-24 px-6 text-center bg-gradient-to-r from-green-700 to-green-500"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            🎯 Đăng ký ngay hôm nay!
          </h2>
          <p className="text-xl text-white mb-6">
            Ưu đãi chỉ còn:{" "}
            <span className="text-yellow-300 font-extrabold text-2xl">
              399K VNĐ
            </span>
          </p>
          <a
            href="https://zalo.me/..."
            className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-200 transition"
          >
            💬 Chat Zalo & Đăng ký học
          </a>
          <p className="text-white mt-4 italic">
            Ưu đãi giới hạn cho 50 học viên đầu tiên
          </p>
        </section>

        <footer className="text-center text-sm text-gray-400 py-10">
          © 2025 Chrome Extension Mastery. Code your tools. Build your freedom.
        </footer>
      </main>
    </div>
  );
}
