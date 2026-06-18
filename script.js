const projects = {
    unitel: {
        title: 'Unitel Smart (Telecom Content)',
        status: 'live',
        credentials: [
            { label: 'Phone Number', value: '02000000000' },
            { label: 'Password', value: 'MyAdmin@2026_StrongPassword' }
        ],
        link: 'https://unitel-smart.vercel.app',
        btnText: 'Go to Unitel Smart Demo'
    },
    bpos: {
        title: 'B-POS Restaurant POS',
        status: 'live',
        credentials: [
            { label: 'Admin Username', value: 'admin' },
            { label: 'Admin Password', value: '1111' },
            { label: 'Cashier Username', value: 'casshier' },
            { label: 'Cashier Password', value: '2222' },
            { label: 'Kitchen Username', value: 'kitchen' },
            { label: 'Kitchen Password', value: '4444' }
        ],
        link: 'https://bpos-theta.vercel.app',
        btnText: 'Go to B-POS System Demo'
    },
    dorm: {
        title: 'Online Dormitory Platform',
        status: 'development',
        link: '#',
        btnText: 'Check back later'
    }
};

const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_view_demos: "↗ View Demos",
        hero_hello: "Hello, I'm",
        hero_role_label: "Information Technology",
        hero_title: "Fresh IT Graduate & Aspiring Web Developer",
        hero_desc: "A highly motivated Information Technology graduate eager to apply academic knowledge to real-world projects. I am passionate about learning new technologies and building digital solutions that make a difference.",
        hero_view_projects: "↗ View My Projects",
        hero_download_cv: "Download CV ↓",
        info_location: "Location",
        info_location_val: "Vientiane Capital, Laos",
        info_email: "Email",
        proj_heading: "Featured Projects",
        proj_subheading: "Click a project to view demo credentials",
        badge_live: "LIVE",
        badge_soon: "SOON",
        tag_fullstack: "Full-stack",
        tag_cms: "CMS",
        tag_telecom: "Telecom",
        tag_mgmt: "Management",
        tag_data: "Data",
        bpos_title: "B-POS System",
        bpos_desc: "Developed a full-stack restaurant POS system with QR ordering, KDS, cashier operations, and reporting.",
        btn_view_demo: "View Demo & Credentials →",
        unitel_title: "Unitel Smart",
        unitel_desc: "Managed telecom website content and digital service information.",
        dorm_title: "Dormitory Platform",
        dorm_desc: "Managed content and data for an online dormitory management platform.",
        btn_view_details: "View Details →",
        about_heading: "About Me",
        about_text: "I am a recent Information Technology graduate who is passionate about building web applications and solving problems. While I am at the beginning of my professional journey, I am a quick learner, hardworking, and deeply committed to improving my skills. I am looking for a chance to start my career and grow within a professional environment.",
        profile_age: "Age",
        profile_nationality: "Nationality",
        val_lao: "Lao",
        profile_languages: "Languages",
        val_languages: "Lao (Native), Thai (Excellent), Vietnamese (Advanced - Studied in Vietnam), English (Basic)",
        skills_heading: "Skills",
        skill_problem_solving: "Problem Solving",
        edu_heading: "Education",
        edu_univ: "Haiphong University in Haiphong Vietnam",
        edu_major: "Major Information Technology",
        edu_faculty: "Faculty Information Technology",
        edu_school: "KM 52 High School",
        exp_heading: "Practical Experience",
        exp_subheading: "Web Content Manager & Full-stack Developer (Demo Projects):",
        exp_unitel: "<strong>Unitel Smart:</strong> Managed and updated digital service information and telecom website content to ensure accuracy and user engagement.",
        exp_bpos: "<strong>B-POS:</strong> Developed a full-stack Restaurant POS system featuring QR ordering, Kitchen Display System (KDS), and comprehensive reporting.",
        exp_dorm: "<strong>Online Dormitory:</strong> Coordinated content and data management for a digital dormitory platform during development phases.",
        modal_cred_title: "Demo Access Credentials",
        modal_copy_note: "ⓘ Please copy credentials before visiting the demo."
    },
    la: {
        nav_home: "ໜ້າຫຼັກ",
        nav_about: "ກ່ຽວກັບ",
        nav_projects: "ຜົນງານ",
        nav_skills: "ທັກສະ",
        nav_experience: "ປະສົບການ",
        nav_view_demos: "↗ ເບິ່ງຕົວຢ່າງ",
        hero_hello: "ສະບາຍດີ, ຂ້ອຍແມ່ນ",
        hero_role_label: "ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ",
        hero_title: "ນັກສຶກສາຈົບໃໝ່ IT ແລະ ນັກພັດທະນາເວັບ",
        hero_desc: "ນັກສຶກສາຈົບໃໝ່ດ້ານເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານທີ່ມີຄວາມກະຕືລືລົ້ນໃນການນຳໃຊ້ຄວາມຮູ້ຈາກມະຫາວິທະຍາໄລມາໃຊ້ກັບວຽກຕົວຈິງ. ຂ້ອຍມີຄວາມມັກໃນການຮຽນຮູ້ເຕັກໂນໂລຊີໃໝ່ໆ ແລະ ສ້າງເວັບໄຊທີ່ມີປະໂຫຍດ.",
        hero_view_projects: "↗ ເບິ່ງຜົນງານຂອງຂ້ອຍ",
        hero_download_cv: "ດາວໂຫລດ CV ↓",
        info_location: "ສະຖານທີ່",
        info_location_val: "ນະຄອນຫຼວງວຽງຈັນ, ລາວ",
        info_email: "ອີເມວ",
        proj_heading: "ຜົນງານທີ່ໂດດເດັ່ນ",
        proj_subheading: "ຄລິກທີ່ຜົນງານເພື່ອເບິ່ງຂໍ້ມູນການເຂົ້າໃຊ້",
        badge_live: "ໃຊ້ງານໄດ້",
        badge_soon: "ໃນໄວໆນີ້",
        tag_fullstack: "ຟູສະແຕັກ",
        tag_cms: "CMS",
        tag_telecom: "ໂທລະຄົມ",
        tag_mgmt: "ການຈັດການ",
        tag_data: "ຂໍ້ມູນ",
        bpos_title: "ລະບົບ B-POS",
        bpos_desc: "ພັດທະນາລະບົບ POS ຮ້ານອາຫານແບບຄົບວົງຈອນ ທີ່ມີການສັ່ງອາຫານຜ່ານ QR, ລະບົບໃນຄົວ, ໜ້າຮ້ານ ແລະ ລາຍງານ.",
        btn_view_demo: "ເບິ່ງຕົວຢ່າງ ແລະ ລະຫັດ →",
        unitel_title: "Unitel Smart",
        unitel_desc: "ຈັດການເນື້ອຫາເວັບໄຊໂທລະຄົມມະນາຄົມ ແລະ ຂໍ້ມູນການບໍລິການດິຈິຕອນ.",
        dorm_title: "ເວັບໄຊຈັດການຫໍພັກ",
        dorm_desc: "ຈັດການເນື້ອຫາ ແລະ ຂໍ້ມູນສຳລັບລະບົບຈັດການຫໍພັກອອນລາຍ.",
        btn_view_details: "ເບິ່ງລາຍລະອຽດ →",
        about_heading: "ກ່ຽວກັບຂ້ອຍ",
        about_text: "ຂ້ອຍເປັນນັກສຶກສາທີ່ຫາກໍ່ຈົບໃໝ່ ຂະແໜງເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ ທີ່ມີຄວາມມັກໃນດ້ານ IT Support ແລະ ການພັດທະນາເວັບໄຊ. ເຖິງວ່າຂ້ອຍຈະຫາກໍ່ເລີ່ມຕົ້ນໃນສາຍອາຊີບນີ້ ແຕ່ຂ້ອຍເປັນຄົນທີ່ຮຽນຮູ້ໄວ, ຂະຫຍັນ ແລະ ຕັ້ງໃຈພັດທະນາທັກສະຂອງຕົນເອງສະເໝີ. ຂ້ອຍກຳລັງຊອກຫາໂອກາດໃນການເລີ່ມຕົ້ນອາຊີບ ແລະ ເຕີບໂຕໃນສະພາບແວດລ້ອມທີ່ເປັນມືອາຊີບ.",
        profile_age: "ອາຍຸ",
        profile_nationality: "ສັນຊາດ",
        val_lao: "ລາວ",
        profile_languages: "ພາສາ",
        val_languages: "ລາວ (ພາສາແມ່), ໄທ (ດີຫຼາຍ), ຫວຽດນາມ (ດີ - ຮຽນຢູ່ຫວຽດນາມ), ອັງກິດ (ພື້ນຖານ)",
        skills_heading: "ທັກສະ",
        skill_problem_solving: "ການແກ້ໄຂບັນຫາ",
        edu_heading: "ການສຶກສາ",
        edu_univ: "ມະຫາວິທະຍາໄລໄຮຟອງ (Haiphong University) ຢູ່ຫວຽດນາມ",
        edu_major: "ຂະແໜງ ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ",
        edu_faculty: "ຄະນະ ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ",
        edu_school: "ໂຮງຮຽນ ມສ 52",
        exp_heading: "ປະສົບການຕົວຈິງ",
        exp_subheading: "ການຈັດການເວັບໄຊ ແລະ ພັດທະນາເວັບ (ໂປຣເຈັກຕົວຢ່າງ):",
        exp_unitel: "<strong>Unitel Smart:</strong> ຈັດການ ແລະ ອັບເດດຂໍ້ມູນການບໍລິການດິຈິຕອນ ແລະ ເນື້ອຫາເວັບໄຊໂທລະຄົມ ເພື່ອໃຫ້ມີຄວາມຖືກຕ້ອງ ແລະ ໜ້າສົນໃຈ.",
        exp_bpos: "<strong>B-POS:</strong> ພັດທະນາລະບົບ POS ຮ້ານອາຫານແບບຄົບວົງຈອນ ທີ່ມີລະບົບສັ່ງອາຫານ QR, ລະບົບ KDS ແລະ ການລາຍງານທີ່ລະອຽດ.",
        exp_dorm: "<strong>Online Dormitory:</strong> ປະສານງານ ແລະ ຈັດການຂໍ້ມູນສຳລັບເວັບໄຊຫໍພັກດິຈິຕອນ ໃນໄລຍະການພັດທະນາ.",
        modal_cred_title: "ຂໍ້ມູນການເຂົ້າໃຊ້ຕົວຢ່າງ",
        modal_copy_note: "ⓘ ກະລຸນາກັອບປີ້ລະຫັດກ່ອນເຂົ້າເບິ່ງຕົວຢ່າງ."
    },
    vi: {
        nav_home: "Trang chủ",
        nav_about: "Giới thiệu",
        nav_projects: "Dự án",
        nav_skills: "Kỹ năng",
        nav_experience: "Kinh nghiệm",
        nav_view_demos: "↗ Xem Demo",
        hero_hello: "Xin chào, tôi là",
        hero_role_label: "Công nghệ thông tin",
        hero_title: "Sinh viên mới tốt nghiệp IT & Nhà phát triển Web",
        hero_desc: "Một sinh viên mới tốt nghiệp ngành Công nghệ thông tin đầy nhiệt huyết, mong muốn áp dụng kiến thức học thuật vào các dự án thực tế. Tôi đam mê học hỏi các công nghệ mới và xây dựng các giải pháp kỹ thuật số có giá trị.",
        hero_view_projects: "↗ Xem dự án của tôi",
        hero_download_cv: "Tải xuống CV ↓",
        info_location: "Địa điểm",
        info_location_val: "Thủ đô Viêng Chăn, Lào",
        info_email: "Email",
        proj_heading: "Dự án tiêu biểu",
        proj_subheading: "Nhấp vào dự án để xem thông tin đăng nhập demo",
        badge_live: "LIVE",
        badge_soon: "SOON",
        tag_fullstack: "Full-stack",
        tag_cms: "CMS",
        tag_telecom: "Viễn thông",
        tag_mgmt: "Quản lý",
        tag_data: "Dữ liệu",
        bpos_title: "Hệ thống B-POS",
        bpos_desc: "Phát triển hệ thống POS nhà hàng toàn diện với đặt món qua mã QR, hệ thống hiển thị bếp (KDS), vận hành thu ngân và báo cáo.",
        btn_view_demo: "Xem Demo & Thông tin →",
        unitel_title: "Unitel Smart",
        unitel_desc: "Quản lý nội dung trang web viễn thông và thông tin dịch vụ kỹ thuật số.",
        dorm_title: "Nền tảng ký túc xá",
        dorm_desc: "Quản lý nội dung và dữ liệu cho nền tảng quản lý ký túc xá trực tuyến.",
        btn_view_details: "Xem chi tiết →",
        about_heading: "Về tôi",
        about_text: "Tôi là sinh viên mới tốt nghiệp chuyên ngành Công nghệ thông tin (IT) với niềm đam mê hỗ trợ IT và phát triển web full stack. Dù tôi mới bắt đầu hành trình sự nghiệp của mình, tôi là người học hỏi nhanh, làm việc chăm chỉ và cam kết cải thiện kỹ năng của mình. Tôi đang tìm kiếm cơ hội để bắt đầu sự nghiệp và phát triển trong môi trường chuyên nghiệp.",
        profile_age: "Tuổi",
        profile_nationality: "Quốc tịch",
        val_lao: "Lào",
        profile_languages: "Ngôn ngữ",
        val_languages: "Lào (Bản ngữ), Thái (Xuất sắc), Việt (Nâng cao - Từng học tại Việt Nam), Anh (Cơ bản)",
        skills_heading: "Kỹ năng",
        skill_problem_solving: "Giải quyết vấn đề",
        edu_heading: "Học vấn",
        edu_univ: "Đại học Hải Phòng tại Hải Phòng, Việt Nam",
        edu_major: "Chuyên ngành Công nghệ thông tin",
        edu_faculty: "Khoa Công nghệ thông tin",
        edu_school: "Trường THPT KM 52",
        exp_heading: "Kinh nghiệm thực tế",
        exp_subheading: "Quản lý nội dung Web & Nhà phát triển Full-stack (Dự án Demo):",
        exp_unitel: "<strong>Unitel Smart:</strong> Quản lý và cập nhật thông tin dịch vụ kỹ thuật số và nội dung trang web viễn thông để đảm bảo tính chính xác và tương tác của người dùng.",
        exp_bpos: "<strong>B-POS:</strong> Phát triển hệ thống POS nhà hàng full-stack với tính năng đặt món QR, hệ thống hiển thị bếp (KDS) và báo cáo toàn diện.",
        exp_dorm: "<strong>Online Dormitory:</strong> Phối hợp quản lý nội dung và dữ liệu cho nền tảng ký túc xá kỹ thuật số trong các giai đoạn phát triển.",
        modal_cred_title: "Thông tin đăng nhập Demo",
        modal_copy_note: "ⓘ Vui lòng sao chép thông tin đăng nhập trước khi xem demo."
    }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalCredentials = document.getElementById('modalCredentials');
const modalComingSoon = document.getElementById('modalComingSoon');
const modalLink = document.getElementById('modalLink');
const modalBtnText = document.getElementById('modalBtnText');
const toast = document.getElementById('toast');

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangDisplay = document.getElementById('currentLang');

function changeLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    currentLangDisplay.textContent = lang.toUpperCase();
    langDropdown.classList.remove('show');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Toggle language dropdown
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    langDropdown.classList.remove('show');
});

function openModal(projectId) {
    const data = projects[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBtnText.textContent = data.btnText;

    const rowsContainer = document.getElementById('credentialRows');
    rowsContainer.innerHTML = ''; // Clear existing

    if (data.status === 'live') {
        modalCredentials.classList.remove('hidden');
        modalComingSoon.classList.add('hidden');
        
        if (data.credentials) {
            data.credentials.forEach((cred, index) => {
                const rowId = `cred_${index}`;
                const row = `
                    <div class="credential-row">
                        <label>${cred.label}</label>
                        <div>
                            <span id="${rowId}">${cred.value}</span>
                            <button type="button" onclick="copyTextFromElement('${rowId}')">Copy</button>
                        </div>
                    </div>
                `;
                rowsContainer.insertAdjacentHTML('beforeend', row);
            });
        }
        
        modalLink.href = data.link;
        modalLink.style.display = 'inline-flex';
    } else {
        modalCredentials.classList.add('hidden');
        modalComingSoon.classList.remove('hidden');
        modalLink.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showToast(message = '✓ Copied to clipboard!') {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

async function copyTextFromElement(elementId) {
    const text = document.getElementById(elementId).textContent.trim();
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        showToast('Copy failed');
    }
}

function setSkillWidths() {
    document.querySelectorAll('.skill-item').forEach(item => {
        const level = item.dataset.level || 0;
        const bar = item.querySelector('.progress-bar span');
        if (bar) bar.style.width = `${level}%`;
    });
}

// Event Listeners
document.querySelectorAll('.clickable[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
});

document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeModal);
});

window.addEventListener('DOMContentLoaded', () => {
    // Load preferred language or default to 'en'
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(savedLang);
    
    setTimeout(setSkillWidths, 500);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});
