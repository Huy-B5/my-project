function showInfo(name, msv, major, role, avatar) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalMSV').innerText = msv;
    document.getElementById('modalMajor').innerText = major;
    document.getElementById('modalRole').innerText = role;
    document.getElementById('modalAvatar').src = avatar;
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}
function showInfo(name, msv, major, role) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalMSV').innerText = msv;
    document.getElementById('modalMajor').innerText = major;
    document.getElementById('modalRole').innerText = role;
    
    // Lấy ảnh đại diện mới nếu có
    let uploadedAvatar = document.getElementById('avatarPreview').src;
    document.getElementById('modalAvatar').src = uploadedAvatar;
    
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Xử lý upload ảnh đại diện
function previewAvatar(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatarPreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
function showInfo() {
    document.getElementById('infoModal').style.display = 'flex';

    // Cập nhật ảnh đại diện mới nếu có
    let uploadedAvatar = document.getElementById('avatarPreview').src;
    document.getElementById('modalAvatar').src = uploadedAvatar;
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Xử lý upload ảnh đại diện
function previewAvatar(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatarPreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
function showInfo() {
    let modal = document.getElementById('infoModal');
    modal.style.display = 'flex';
    modal.style.animation = 'fadeIn 0.5s ease-in-out';

    let uploadedAvatar = document.getElementById('avatarPreview').src;
    document.getElementById('modalAvatar').src = uploadedAvatar;
}

function closeModal() {
    let modal = document.getElementById('infoModal');
    modal.style.animation = 'fadeOut 0.5s ease-in-out';
    setTimeout(() => { modal.style.display = 'none'; }, 500);
}

function previewAvatar(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatarPreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
