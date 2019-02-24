/**
 * RGB 값 계산해서 가장 가까운 색 찾기
 * 이진수로 주어진 값을 토대로 Black/White/Red/Green/Blue 색상의 RGB 값과
 * 유클리디언 거리로 계산하여 가장 근접한 색 반환
 * 만약 두 개 이상의 색과 같은 거리일 때는 "Ambiguous" 반환
 */
const COLORS = [
    {
        name: 'Black',
        value: [0, 0, 0]
    },
    {
        name: 'White',
        value: [255, 255, 255]
    },
    {
        name: 'Red',
        value: [255, 0, 0]
    },
    {
        name: 'Green',
        value: [0, 255, 0]
    },
    {
        name: 'Blue',
        value: [0, 0, 255]
    }
]

function getColor(pixel) {
    const color_R = pixel.slice(0, 8);
    const color_G = pixel.slice(8, 16);
    const color_B = pixel.slice(16);
    // 2진수 값을 10진수로 변환
    const rgb_arr = [parseInt(color_R, 2), parseInt(color_G, 2), parseInt(color_B, 2)];
    let closest_color = '';
    let min_value = 1000;
    let value = 0;

    COLORS.forEach((color) => {
        value = euclideanDistance(rgb_arr, color.value);
        if (min_value > value) {
            min_value = value;
            closest_color = color.name;

        } else if (min_value === value) {
            closest_color = "Ambiguous";
        }
    });

    return closest_color;
}

// 유클리디언 거리를 구하는 함수
function euclideanDistance(point1, point2) {
    return Math.sqrt(
        Math.abs(
            Math.pow(point1[0] - point2[0], 2) +
            Math.pow(point1[1] - point2[1], 2) +
            Math.pow(point1[2] - point2[2], 2)
        )
    );
}

function closestColor(pixels) {
    let result = [];
    const pixels_len = pixels.length;

    for (let i = 0; i < pixels_len; i++) {
        result.push(getColor(pixels[i]));
    }

    return result;
}