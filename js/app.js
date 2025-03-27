// Digital Card Pro 应用脚本

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const nameInput = document.getElementById('name');
    const titleInput = document.getElementById('title');
    const companyInput = document.getElementById('company');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const websiteInput = document.getElementById('website');
    const wechatInput = document.getElementById('wechat');
    const linkedinInput = document.getElementById('linkedin');
    const templateSelect = document.getElementById('template');
    const previewBtn = document.getElementById('previewBtn');
    
    // 预览元素
    const previewName = document.querySelector('.preview-name');
    const previewTitle = document.querySelector('.preview-title');
    const previewSignature = document.querySelector('.preview-signature');
    const cardPreview = document.getElementById('cardPreview');
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');
    
    // 初始化二维码
    let qrcode = new QRCode(document.getElementById('qrcode'), {
        text: window.location.href,
        width: 100,
        height: 100,
        colorDark: '#3498db',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // 预览按钮点击事件
    previewBtn.addEventListener('click', function() {
        // 更新预览内容
        previewName.textContent = nameInput.value || '您的姓名';
        previewTitle.textContent = titleInput.value || '您的职位';
        previewSignature.textContent = companyInput.value ? `个人签名：${companyInput.value}` : '个人签名：分享专业知识，创造价值';
        
        // 更新二维码内容
        const cardData = {
            name: nameInput.value,
            title: titleInput.value,
            signature: companyInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            website: websiteInput.value,
            wechat: wechatInput.value,
            linkedin: linkedinInput.value
        };
        
        // 更新二维码内容为JSON字符串
        qrcode.clear();
        qrcode.makeCode(JSON.stringify(cardData));
        
        // 根据选择的模板更改样式
        const templateValue = templateSelect.value;
        cardPreview.className = 'card shadow border-0 h-100 preview-card';
        cardPreview.classList.add('template-' + templateValue);
        
        // 显示成功消息
        alert('名片预览已更新！');
    });
    
    // 模板选择变化事件
    templateSelect.addEventListener('change', function() {
        const templateValue = this.value;
        cardPreview.className = 'card shadow border-0 h-100';
        cardPreview.classList.add('template-' + templateValue);
    });
    
    // 表单输入实时更新预览（可选功能）
    const formInputs = [nameInput, titleInput, companyInput, phoneInput, emailInput, websiteInput];
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const previewElement = document.querySelector('.preview-' + input.id);
            if (previewElement) {
                previewElement.textContent = input.value || `您的${input.previousElementSibling.textContent}`;
            }
        });
    });
});