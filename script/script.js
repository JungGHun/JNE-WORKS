document.addEventListener('DOMContentLoaded', function() {
  // 페이지가 완전히 로드되면 실행됩니다.
  setTimeout(function() {
      // 로고를 숨기고 메인 콘텐츠를 보여줍니다.
      document.getElementById('logo').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  }, 2000); // 3초 후에 실행
});
