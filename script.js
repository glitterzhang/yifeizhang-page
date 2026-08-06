// 点击 Email 按钮复制邮箱地址到剪贴板
const emailBtn = document.querySelector(".email-copy");
if (emailBtn) {
  emailBtn.addEventListener("click", async () => {
    const email = emailBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    const original = emailBtn.textContent;
    emailBtn.textContent = "Copied!";
    emailBtn.classList.add("copied");
    setTimeout(() => {
      emailBtn.textContent = original;
      emailBtn.classList.remove("copied");
    }, 1500);
  });
}

// 移动端导航折叠
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// 滚动时高亮当前所在分区对应的导航项
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navItems.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
