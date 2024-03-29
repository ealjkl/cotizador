import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAriaMasterplan = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const main = {
    x: 0,
    y: 0,
    width: 560.86,
    height: 228.67,
  };

  const background = {
    x: -44,
    y: -125,
    width: 790,
    // height: 900,
  };

  const margin = {
    top: 50,
    right: 70,
    left: 20,
    bottom: 50,
  };

  const viewBox = {
    x: main.x - margin.left,
    y: main.y - margin.top,
    width: main.width + margin.left + margin.right,
    height: main.height + margin.top + margin.bottom,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      className="blueprint"
      ref={ref}
      {...props}
    >
      <g className="blueprint__main-group">
        <image
          href="aria/blueprint/aria-masterplan-background.png"
          x={background.x}
          y={background.y}
          width={background.width}
        />
        <g>
          <path
            data-available={1}
            data-area={264.25}
            data-number={99}
            id="lot-99"
            d="M35.17,4.28C39.39-3.5,49.54,2,49.54,2V32.5l-14.37-4Z"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={98}
            id="lot-98"
            points="63.92 36.19 49.55 32.5 49.55 2.04 63.92 5.6 63.92 36.19"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={97}
            id="lot-97"
            points="78.29 40.15 63.92 36.19 63.92 5.6 78.29 9.42 78.29 40.15"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={96}
            id="lot-96"
            points="92.67 12.85 92.67 43.97 78.29 40.15 78.29 9.42 92.67 12.85"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={95}
            id="lot-95"
            points="107.17 17.46 92.67 12.85 92.67 43.97 107.17 47.66 107.17 17.46"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={94}
            id="lot-94"
            points="121.81 21.02 107.17 17.46 107.17 47.66 121.81 51.35 121.81 21.02"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={93}
            id="lot-93"
            points="135.65 54.65 121.81 51.35 121.81 21.02 135.65 24.19 135.65 54.65"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={92}
            id="lot-92"
            points="149.76 58.74 135.65 54.65 135.65 24.19 149.76 28.15 149.76 58.74"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={91}
            id="lot-91"
            points="164.14 62.43 149.76 58.74 149.76 28.15 164.14 31.97 164.14 62.43"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={90}
            id="lot-90"
            points="178.64 65.86 164.14 62.43 164.14 31.97 178.64 35.66 178.64 65.86"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={89}
            id="lot-89"
            points="193.02 69.82 178.64 65.86 178.64 35.66 193.02 39.35 193.02 69.82"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={88}
            id="lot-88"
            points="207.52 73.77 193.02 69.82 193.02 39.35 207.52 43.18 207.52 73.77"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={87}
            id="lot-87"
            points="221.76 77.33 207.52 73.77 207.52 43.18 222.42 47.66 221.76 77.33"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={86}
            id="lot-86"
            points="235.87 81.03 221.76 77.33 222.42 47.66 236.93 50.83 235.87 81.03"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={85}
            id="lot-85"
            points="250.25 84.98 235.87 81.03 236.93 50.83 251.17 54.65 250.25 84.98"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={84}
            id="lot-84"
            points="264.49 88.81 250.25 84.98 251.17 54.65 265.15 58.08 264.49 88.81"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={83}
            id="lot-83"
            points="265.15 120.19 264.49 88.81 250.25 84.98 250.25 115.97 265.15 120.19"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={82}
            id="lot-82"
            points="235.87 111.62 235.87 81.03 250.25 84.98 250.25 115.97 235.87 111.62"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={81}
            id="lot-81"
            points="221.76 107.79 221.76 77.33 235.87 81.03 235.87 111.62 221.76 107.79"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={80}
            id="lot-80"
            points="207.52 73.77 207.52 104.23 221.76 107.79 221.76 77.33 207.52 73.77"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={79}
            id="lot-79"
            points="193.02 100.28 193.02 69.82 207.52 73.77 207.52 104.23 193.02 100.28"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={78}
            id="lot-78"
            points="178.64 96.58 178.64 65.86 193.02 69.82 193.02 100.28 178.64 96.58"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={77}
            id="lot-77"
            points="164.14 62.43 164.14 93.03 178.64 96.58 178.64 65.86 164.14 62.43"
          />
          <polygon
            data-available={2}
            data-area={275}
            data-number={76}
            id="lot-76"
            points="149.76 58.74 149.76 88.81 164.14 93.03 164.14 62.43 149.76 58.74"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={75}
            id="lot-75"
            points="135.65 54.65 135.65 85.9 149.76 88.81 149.76 58.74 135.65 54.65"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={74}
            id="lot-74"
            points="121.81 51.35 121.81 81.68 135.65 85.9 135.65 54.65 121.81 51.35"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={73}
            id="lot-73"
            points="107.17 47.66 107.17 78.39 121.81 81.68 121.81 51.35 107.17 47.66"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={72}
            id="lot-72"
            points="92.67 43.97 92.67 74.56 107.17 78.39 107.17 47.66 92.67 43.97"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={71}
            id="lot-71"
            points="78.29 40.15 78.29 69.82 92.67 74.56 92.67 43.97 78.29 40.15"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={70}
            id="lot-70"
            points="63.92 36.19 63.92 65.86 78.29 69.82 78.29 40.15 63.92 36.19"
          />
          <polygon
            data-available={1}
            data-area={275}
            data-number={69}
            id="lot-69"
            points="49.55 32.5 49.55 62.43 63.92 65.86 63.92 36.19 49.55 32.5"
          />
          <path
            data-available={3}
            data-area={271.97}
            data-number={68}
            id="lot-68"
            d="M35.17,28.54V56a5.57,5.57,0,0,0,4.09,4.29l10.28,2.17V32.5Z"
          />
          <polygon
            data-available={3}
            data-area={284.51}
            data-number={67}
            id="lot-67"
            points="0.16 64.67 5.9 93.03 19.35 97.38 19.35 68.63 0.16 64.67"
          />
          <polygon
            data-available={2}
            data-area={273.9}
            data-number={66}
            id="lot-66"
            points="35.17 73.77 19.35 68.63 19.35 97.38 35.17 101.73 35.17 73.77"
          />
          <polygon
            data-available={1}
            data-area={253.16}
            data-number={65}
            id="lot-65"
            points="49.55 77.33 35.17 73.77 35.17 101.73 49.55 105.49 49.55 77.33"
          />
          <polygon
            data-available={1}
            data-area={255.15}
            data-number={64}
            id="lot-64"
            points="63.92 81.03 49.55 77.33 49.55 105.49 63.92 109.44 63.92 81.03"
          />
          <polygon
            data-available={1}
            data-area={257.14}
            data-number={63}
            id="lot-63"
            points="78.29 85.18 63.92 81.03 63.92 109.44 78.29 113.4 78.29 85.18"
          />
          <polygon
            data-available={1}
            data-area={259.13}
            data-number={62}
            id="lot-62"
            points="92.67 88.81 78.29 85.18 78.29 113.4 92.67 117.16 92.67 88.81"
          />
          <polygon
            data-available={1}
            data-area={261.12}
            data-number={61}
            id="lot-61"
            points="107.17 92.23 92.67 88.81 92.67 117.16 107.17 121.51 107.17 92.23"
          />
          <polygon
            data-available={1}
            data-area={263.11}
            data-number={60}
            id="lot-60"
            points="121.02 96.58 107.17 92.23 107.17 121.51 121.81 124.9 121.02 96.58"
          />
          <polygon
            data-available={1}
            data-area={265.1}
            data-number={59}
            id="lot-59"
            points="135.65 129.42 121.81 124.9 121.02 96.58 135.65 99.55 135.65 129.42"
          />
          <polygon
            data-available={1}
            data-area={267.09}
            data-number={58}
            id="lot-58"
            points="149.76 132.59 135.65 129.42 135.65 99.55 150.49 102.58 149.76 132.59"
          />
          <polygon
            data-available={1}
            data-area={269.08}
            data-number={57}
            id="lot-57"
            points="164.14 137.13 149.76 132.59 150.49 102.58 164.93 106.67 164.14 137.13"
          />
          <polygon
            data-available={1}
            data-area={271.01}
            data-number={56}
            id="lot-56"
            points="178.64 141.29 164.14 137.13 164.93 106.67 178.64 110.83 178.64 141.29"
          />
          <polygon
            data-available={1}
            data-area={273.06}
            data-number={55}
            id="lot-55"
            points="193.02 144.26 178.64 141.29 178.64 110.83 193.81 114.19 193.02 144.26"
          />
          <polygon
            data-available={2}
            data-area={275.05}
            data-number={54}
            id="lot-54"
            points="207.52 148.61 193.02 144.26 193.81 114.19 207.52 118.15 207.52 148.61"
          />
          <polygon
            data-available={1}
            data-area={277.04}
            data-number={53}
            id="lot-53"
            points="221.76 151.97 207.52 148.61 207.52 118.15 221.76 121.51 221.76 151.97"
          />
          <polygon
            data-available={1}
            data-area={279.04}
            data-number={52}
            id="lot-52"
            points="235.87 156.12 221.76 151.97 221.76 121.51 235.87 126.06 235.87 156.12"
          />
          <polygon
            data-available={1}
            data-area={281.03}
            data-number={51}
            id="lot-51"
            points="250.25 160.28 235.87 156.12 235.87 126.06 251.17 129.42 250.25 160.28"
          />
          <polygon
            data-available={1}
            data-area={283.02}
            data-number={50}
            id="lot-50"
            points="265.15 164.23 250.25 160.28 251.17 129.42 265.15 133.38 265.15 164.23"
          />
          <polygon
            data-available={3}
            data-area={311.02}
            data-number={49}
            id="lot-49"
            points="280.25 168.19 265.15 164.23 265.15 133.38 280.25 137.13 280.25 168.19"
          />
          <path
            data-available={3}
            data-area={312.57}
            data-number={48}
            id="lot-48"
            d="M296.47,172.54l-16.22-4.35V137.13l11.87,3.17s4.35,1,4.35,4.94Z"
          />
          <path
            data-available={3}
            data-area={315.98}
            data-number={17}
            id="lot-17"
            d="M310.71,57.42V86.3s-.4,3.23,5.14,4.48l10.29,3.7V62.17Z"
          />
          <polygon
            data-available={3}
            data-area={319.68}
            data-number={16}
            id="lot-16"
            points="341.57 65.93 326.14 62.17 326.14 94.47 341.57 98.5 341.57 65.93"
          />
          <polygon
            data-available={1}
            data-area={300.23}
            data-number={15}
            id="lot-15"
            points="356.6 69.68 341.57 65.93 341.57 98.5 356.6 102.58 356.6 69.68"
          />
          <polygon
            data-available={1}
            data-area={302.04}
            data-number={14}
            id="lot-14"
            points="371.24 73.77 356.6 69.68 356.6 102.58 371.24 106.47 371.24 73.77"
          />
          <polygon
            data-available={1}
            data-area={303.8}
            data-number={13}
            id="lot-13"
            points="385.87 77.33 371.24 73.77 371.24 106.47 385.87 110.83 385.87 77.33"
          />
          <polygon
            data-available={1}
            data-area={305.57}
            data-number={12}
            id="lot-12"
            points="400.51 81.03 385.87 77.33 385.87 110.83 400.51 114.58 400.51 81.03"
          />
          <polygon
            data-available={1}
            data-area={307.33}
            data-number={11}
            id="lot-11"
            points="415.15 84.98 400.51 81.03 400.51 114.58 415.15 118.15 415.15 84.98"
          />
          <polygon
            data-available={1}
            data-area={309.09}
            data-number={10}
            id="lot-10"
            points="429.79 88.81 415.15 84.98 415.15 118.15 429.79 122.69 429.79 88.81"
          />
          <polygon
            data-available={1}
            data-area={310.86}
            data-number={9}
            id="lot-9"
            points="444.23 92.3 429.79 88.81 429.79 122.69 444.23 127.25 444.23 92.3"
          />
          <polygon
            data-available={1}
            data-area={312.62}
            data-number={8}
            id="lot-8"
            points="459.06 95.96 444.23 92.3 444.23 127.25 459.06 131 459.06 95.96"
          />
          <polygon
            data-available={1}
            data-area={314.39}
            data-number={7}
            id="lot-7"
            points="473.7 99.58 459.06 95.96 459.06 131 473.7 134.96 473.7 99.58"
          />
          <polygon
            data-available={1}
            data-area={316.15}
            data-number={6}
            id="lot-6"
            points="487.94 103.84 473.7 99.58 473.7 134.96 487.94 138.72 487.94 103.84"
          />
          <polygon
            data-available={1}
            data-area={317.92}
            data-number={5}
            id="lot-5"
            points="502.18 108.03 487.94 103.84 487.94 138.72 502.18 142.87 502.18 108.03"
          />
          <polygon
            data-available={3}
            data-area={319.68}
            data-number={4}
            id="lot-4"
            points="517.02 111.65 502.18 108.03 502.18 142.87 517.02 146.83 517.02 111.65"
          />
          <polygon
            data-available={3}
            data-area={321.44}
            data-number={3}
            id="lot-3"
            points="531.65 115.46 517.02 111.65 517.02 146.83 531.65 150.78 531.65 115.46"
          />
          <polygon
            data-available={3}
            data-area={323.21}
            data-number={2}
            id="lot-2"
            points="546.69 119.15 531.65 115.46 531.65 150.78 546.69 154.84 546.69 119.15"
          />
          <polygon
            data-available={3}
            data-area={325.05}
            data-number={1}
            id="lot-1"
            points="560.73 123.35 546.69 119.15 546.69 154.84 560.73 158.1 560.73 123.35"
          />
          <polygon
            data-available={1}
            data-area={279.87}
            data-number={18}
            id="lot-18"
            points="341.57 112.41 342.36 142.87 356.6 146.83 356.6 115.46 341.57 110.63 341.57 112.41"
          />
          <polygon
            data-available={1}
            data-area={280.02}
            data-number={19}
            id="lot-19"
            points="371.24 150.78 356.6 146.83 356.6 115.46 371.24 120.19 371.24 150.78"
          />
          <polygon
            data-available={1}
            data-area={279.92}
            data-number={20}
            id="lot-20"
            points="385.87 154.84 371.24 150.78 371.24 120.19 385.87 124.9 385.87 154.84"
          />
          <polygon
            data-available={1}
            data-area={279.94}
            data-number={21}
            id="lot-21"
            points="400.51 159.09 385.87 154.84 385.87 124.9 400.51 128.73 400.51 159.09"
          />
          <polygon
            data-available={1}
            data-area={280.08}
            data-number={22}
            id="lot-22"
            points="415.15 162.85 400.51 159.09 400.51 128.73 415.15 133.12 415.15 162.85"
          />
          <polygon
            data-available={1}
            data-area={280.11}
            data-number={23}
            id="lot-23"
            points="429.79 166.81 415.15 162.85 415.15 133.12 429.79 136.34 429.79 166.81"
          />
          <polygon
            data-available={1}
            data-area={280.2}
            data-number={24}
            id="lot-24"
            points="444.23 171.35 429.79 166.81 429.79 136.34 444.23 140.69 444.23 171.35"
          />
          <polygon
            data-available={1}
            data-area={280.13}
            data-number={25}
            id="lot-25"
            points="459.06 174.91 444.23 171.35 444.23 140.69 459.06 144.45 459.06 174.91"
          />
          <polygon
            data-available={1}
            data-area={280.14}
            data-number={26}
            id="lot-26"
            points="473.7 178.87 459.06 174.91 459.06 144.45 473.7 148.21 473.7 178.87"
          />
          <polygon
            data-available={1}
            data-area={280.2}
            data-number={27}
            id="lot-27"
            points="487.94 182.83 473.7 178.87 473.7 148.21 487.94 152.17 487.94 182.83"
          />
          <polygon
            data-available={1}
            data-area={280.12}
            data-number={28}
            id="lot-28"
            points="502.18 186.78 487.94 182.83 487.94 152.17 502.18 155.73 502.18 186.78"
          />
          <polygon
            data-available={1}
            data-area={280.17}
            data-number={29}
            id="lot-29"
            points="517.02 190.74 502.18 186.78 502.18 155.73 517.02 160.28 517.02 190.74"
          />
          <polygon
            data-available={1}
            data-area={280.17}
            data-number={30}
            id="lot-30"
            points="531.65 194.5 517.02 190.74 517.02 160.28 531.65 164.43 531.65 194.5"
          />
          <polygon
            data-available={1}
            data-area={280.2}
            data-number={31}
            id="lot-31"
            points="546.69 198.65 531.65 194.5 531.65 164.43 546.69 168.19 546.69 198.65"
          />
          <polygon
            data-available={1}
            data-area={279.66}
            data-number={32}
            id="lot-32"
            points="560.73 202.41 546.69 198.65 546.69 168.19 560.73 172.34 560.73 202.41"
          />
          <polygon
            data-available={1}
            data-area={279.93}
            data-number={47}
            id="lot-47"
            points="341.57 173.23 356.6 177.39 356.6 146.83 342.36 142.87 341.57 173.23"
          />
          <polygon
            data-available={1}
            data-area={280.08}
            data-number={46}
            id="lot-46"
            points="371.24 181.54 356.6 177.39 356.6 146.83 371.24 150.78 371.24 181.54"
          />
          <polygon
            data-available={1}
            data-area={280.3}
            data-number={45}
            id="lot-45"
            points="385.87 185.3 371.24 181.54 371.24 150.78 385.87 154.84 385.87 185.3"
          />
          <polygon
            data-available={1}
            data-area={280.2}
            data-number={44}
            id="lot-44"
            points="400.51 189.35 385.87 185.3 385.87 154.84 400.51 159.09 400.51 189.35"
          />
          <polygon
            data-available={1}
            data-area={280.33}
            data-number={43}
            id="lot-43"
            points="415.15 193.11 400.51 189.35 400.51 159.09 415.15 162.85 415.15 193.11"
          />
          <polygon
            data-available={1}
            data-area={280.32}
            data-number={42}
            id="lot-42"
            points="429.79 197.46 415.15 193.11 415.15 162.85 429.79 166.81 429.79 197.46"
          />
          <polygon
            data-available={1}
            data-area={280.29}
            data-number={41}
            id="lot-41"
            points="444.23 201.03 429.79 197.46 429.79 166.81 444.23 171.35 444.23 201.03"
          />
          <polygon
            data-available={1}
            data-area={280.26}
            data-number={40}
            id="lot-40"
            points="459.06 205.18 444.23 201.03 444.23 171.35 459.06 174.91 459.06 205.18"
          />
          <polygon
            data-available={1}
            data-area={280.27}
            data-number={39}
            id="lot-39"
            points="473.7 209.33 459.06 205.18 459.06 174.91 473.7 178.87 473.7 209.33"
          />
          <polygon
            data-available={1}
            data-area={280.25}
            data-number={38}
            id="lot-38"
            points="487.94 212.89 473.7 209.33 473.7 178.87 487.94 182.83 487.94 212.89"
          />
          <polygon
            data-available={1}
            data-area={280.24}
            data-number={37}
            id="lot-37"
            points="502.18 217.44 487.94 212.89 487.94 182.83 502.18 186.78 502.18 217.44"
          />
          <polygon
            data-available={1}
            data-area={280.26}
            data-number={36}
            id="lot-36"
            points="517.02 221.79 502.18 217.44 502.18 186.78 517.02 190.74 517.02 221.79"
          />
          <polygon
            data-available={1}
            data-area={280.23}
            data-number={35}
            id="lot-35"
            points="531.65 225.55 517.02 221.79 517.02 190.74 531.65 194.5 531.65 225.55"
          />
          <polygon
            data-available={1}
            data-area={278.27}
            data-number={34}
            id="lot-34"
            points="546.69 228.52 531.65 225.55 531.65 194.5 546.69 198.65 546.69 228.52"
          />
          <path
            data-available={1}
            data-area={242.64}
            data-number={33}
            id="lot-33"
            d="M560.73,225.55V202.41l-14-3.76v29.87S559.35,228.72,560.73,225.55Z"
          />
        </g>
      </g>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAriaMasterplan);
export default ForwardRef;
