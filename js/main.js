onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1100);

    // Interactive Firefly Logic
    const firefly = document.getElementById("fireflyTarget");
    const fireflyText = document.getElementById("fireflyText");
    const popup = document.getElementById("messagePopup");
    const closeBtn = document.getElementById("closePopup");

    let clickCount = 0;

    if (firefly && popup && closeBtn) {
        // Fun prank: Firefly warps away on first 2 clicks
        firefly.addEventListener("click", () => {
            if (clickCount < 2) {
                // Warp away!
                warpFirefly();
                clickCount++;
            } else {
                // Finally show the popup
                popup.classList.remove("hidden");
                // Reset text just in case
                fireflyText.innerText = "กดที่หิ่งห้อย";
            }
        });

        function warpFirefly() {
            // Change text feedback first
            const prankTexts = ["ว้าย! ไม่โดนหรอก", "จับให้ได้ซี่!", "เร็วไม่พอหรอกนะ"];
            fireflyText.innerText = prankTexts[clickCount % prankTexts.length];

            // Randomize position directly above/around flowers (Narrower area)
            const randomX = Math.floor(Math.random() * 20) + 40; // 40% to 60% (centered)
            const randomY = Math.floor(Math.random() * 20) + 35; // 35% to 55% (above flowers)
            firefly.style.left = randomX + "%";
            firefly.style.bottom = randomY + "%";

            // Add sliding effect class
            firefly.classList.add("warping");

            // Remove the class after the transition finishes so it can be clicked again
            setTimeout(() => {
                firefly.classList.remove("warping");
            }, 400);
        }

        // Close popup when 'X' is clicked
        closeBtn.addEventListener("click", () => {
            popup.classList.add("hidden");
        });

        // Close popup when clicking anywhere outside the popup content
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.classList.add("hidden");
            }
        });
    }
};