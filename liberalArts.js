      // Get a reference to the dropdown element
      var dropdown = document.getElementById("college-select");
    
      // Add an event listener to detect when the user selects an option
      dropdown.addEventListener("change", function() {
        // Get the selected value from the dropdown
        var selectedOption = dropdown.value;
    
        // Call a function to update the content based on the selected value
        updateContent(selectedOption);
      });
    
      // Function to update the content based on the selected value
      function updateContent(selectedOption) {
        // Get a reference to the content container
        var contentContainer = document.getElementById("content-container");
    
        // Clear the content container
        contentContainer.innerHTML = "";
    
        // Create new content based on the selected option
        var newContent = document.createElement("div");
    
        // Add the appropriate content based on the selected option
        switch (selectedOption) {
          case "liberalArts":
            newContent.innerHTML = 
            '<div class="freshman">1학년</div>' +
            '<div class="firstSem">1학기 지정과목</div>' +
            '<ul class="firstcourse">' +
            '  <li>기독교와 세계</li>' +
            '  <li>제2외국어</li>' +
            '</ul>' +
            '<div class="secondSem">2학기 지정과목</div>' +
            '<ul class="secondcourse">' +
            '  <li>통합적사고와 글쓰기</li>' +
            '  <li>Advanced English</li>' +
            '  <li>제2외국어</li>' +
            '</ul>' +
            '<ul class="computing"><li>컴퓨팅과 수리적 사고 영역 중 택1</li></ul>' +
            '<div class="computingtip">지정학기 없이 졸업 전까지만 수강,<br>' +
            '  하지만 1학년 TO가 많으므로 1학년 때 수강 추천</div>' +
            '<div class="fourcourse">5영역 중 4영역 이수</div>' +
            '<ul class="coursetype">' +
            '  <li>문학과 언어</li>' +
            '  <li>역사와 철학</li>' +
            '  <li>인간과 사회</li>' +
            '  <li>과학과 기술</li>' +
            '  <li>예술과 표현</li>' +
            '</ul>';
          break;
;
          case "social":
            newContent.innerHTML = 
            '<div class="freshman">1학년</div>' +
            '<div class="firstSem">1학기 지정과목</div>' +
            '<ul class="firstcourse">' +
            '  <li>College English</li>' +
            '</ul>' +
            '<div class="secondSem">2학기 지정과목</div>' +
            '<ul class="secondcourse">' +
            '  <li>통합적사고와 글쓰기</li>' +
            '  <li>기독교와 세계</li>' +
            '</ul>' +
            '<ul class="computing"><li>컴퓨팅과 수리적 사고 영역 중 택1</li></ul>' +
            '<div class="computingtip">지정학기 없이 졸업 전까지만 수강,<br>' +
            '  하지만 1학년 TO가 많으므로 1학년 때 수강 추천</div>' +
            '<div class="fourcourse">5영역 중 4영역 이수</div>' +
            '<ul class="coursetype">' +
            '  <li>문학과 언어</li>' +
            '  <li>역사와 철학</li>' +
            '  <li>인간과 사회</li>' +
            '  <li>과학과 기술</li>' +
            '  <li>예술과 표현</li>' +
            '</ul>';;
            break;
          case "natural":
            newContent.innerHTML = 
            '<div class="freshman">1학년</div>' +
            '<div class="firstSem">1학기 지정과목</div>' +
            '<ul class="firstcourse">' +
            '  <li>College English</li>' +
            '  <li>통합적사고와 글쓰기</li>' +
            '</ul>' +
            '<div class="secondSem">2학기 지정과목</div>' +
            '<ul class="secondcourse">' +
            '  <li>기독교와 세계</li>' +
            '</ul>' +
            '<ul class="computing"><li>컴퓨팅과 수리적 사고 영역 중 택1</li></ul>' +
            '<div class="computingtip">지정학기 없이 졸업 전까지만 수강,<br>' +
            '  하지만 1학년 TO가 많으므로 1학년 때 수강 추천</div>' +
            '<div class="fourcourse">5영역 중 4영역 이수</div>' +
            '<ul class="coursetype">' +
            '  <li>문학과 언어</li>' +
            '  <li>역사와 철학</li>' +
            '  <li>인간과 사회</li>' +
            '  <li>과학과 기술</li>' +
            '  <li>예술과 표현</li>' +
            '</ul>';;
            break;
          // Add cases for other options as needed
          default:
            newContent.innerHTML = "<p>No content available for the selected option</p>";
            break;
        }
    
        // Append the new content to the content container
        contentContainer.appendChild(newContent);
      }