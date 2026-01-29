$(document).ready(function () {
    // Chế độ ẩn/hiện mật khẩu
    $('#togglePassword').on('click', function () {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Hiện' : 'Ẩn');
    });

    // Xử lý hiệu ứng focus (Đã được CSS xử lý, nhưng có thể thêm các cải tiến bằng JS)
    const $inputs = $('.input-group input');

    // Xử lý khi gửi form
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const $btn = $('#loginBtn');
        const originalText = $btn.text();

        // Phản hồi trực quan khi đang "đăng nhập"
        $btn.text('Đang đăng nhập...').css('opacity', '0.8').prop('disabled', true);

        const username = $('#username').val();
        const password = $('#password').val();

        console.log('Thông tin đăng nhập:', { username, password });

        // Giả lập độ trễ mạng
        setTimeout(function () {
            // Trả lại trạng thái ban đầu
            $btn.text('Thành công!').css('background-color', '#27ae60');

            setTimeout(function () {
                $btn.text(originalText).css('background-color', '').css('opacity', '1').prop('disabled', false);
                alert('Đăng nhập thành công! (Bản mô phỏng)');
            }, 1000);

        }, 1500);
    });

    // Hiệu ứng di chuyển thẻ nhẹ nhàng (tùy chọn)
    $(document).on('mousemove', function (e) {
        if ($(window).width() > 768) {
            const amount = 5;
            const x = (e.pageX - $(window).width() / 2) / ($(window).width() / 2) * amount;
            const y = (e.pageY - $(window).height() / 2) / ($(window).height() / 2) * amount;

            $('.login-card').css('transform', `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`);
        }
    });
});
