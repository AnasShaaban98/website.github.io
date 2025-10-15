humanLanguages = document.getElementsByClassName('human-language');
humanLanguageLabels = document.getElementsByClassName('human-language-label');
for (let i = 0; i < humanLanguages.length; i++) {
    humanLanguages[i].addEventListener('mouseover', function() {
        humanLanguageLabels[i].style.display = "block";
    });
    humanLanguages[i].addEventListener('mouseout', function() {
            humanLanguageLabels[i].style.display = "none";
    });
}

computerSoftware = document.getElementsByClassName('computer-skill');
computerSoftwareLabels = document.getElementsByClassName('computer-skill-label');
for (let i = 0; i < computerSoftware.length; i++) {
    computerSoftware[i].addEventListener('mouseover', function() {
        computerSoftwareLabels[i].style.display = "block";
    });
    computerSoftware[i].addEventListener('mouseout', function() {
        computerSoftwareLabels[i].style.display = "none";
    });
}

