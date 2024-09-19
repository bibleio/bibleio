import React from 'react';

type Color =
  | 'accent'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'pink';

function formatSize(
  size: number,
  aspectRatio: number
): { width: number; height: number } {
  const height = size;
  const width = Math.round(height * aspectRatio);

  return { width, height };
}

export type ShapesProps = { glow?: boolean; fill: Color; size?: number };
export const Cross = ({
  glow = true,
  fill = 'yellow',
  size = 256,
}: ShapesProps) => {
  const svgSize = formatSize(size, 444 / 689);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 444 689"
      fill="none"
      className="overflow-visible"
    >
      {glow && (
        <path
          d="M240.247 0.5C260.125 0.5 276.24 16.6191 276.24 36.5033V127.762C276.24 148.198 292.802 164.765 313.233 164.765H407.507C427.385 164.765 443.5 180.884 443.5 200.768V237.272C443.5 257.156 427.385 273.275 407.507 273.275H313.233C292.802 273.275 276.24 289.842 276.24 310.278V652.497C276.24 672.381 260.125 688.5 240.247 688.5H203.753C183.875 688.5 167.76 672.381 167.76 652.497V310.278C167.76 289.842 151.198 273.275 130.767 273.275H36.4931C16.6148 273.275 0.499999 257.156 0.5 237.271L0.500002 200.768C0.500002 180.884 16.6148 164.765 36.4932 164.765L130.767 164.765C151.198 164.765 167.76 148.198 167.76 127.762V36.5033C167.76 16.6191 183.875 0.5 203.753 0.5H240.247Z"
          className="blur-[10vmin] dark:opacity-60"
          style={{ fill: `var(--${fill})` }}
        />
      )}
      <path
        d="M240.247 0.5C260.125 0.5 276.24 16.6191 276.24 36.5033V127.762C276.24 148.198 292.802 164.765 313.233 164.765H407.507C427.385 164.765 443.5 180.884 443.5 200.768V237.272C443.5 257.156 427.385 273.275 407.507 273.275H313.233C292.802 273.275 276.24 289.842 276.24 310.278V652.497C276.24 672.381 260.125 688.5 240.247 688.5H203.753C183.875 688.5 167.76 672.381 167.76 652.497V310.278C167.76 289.842 151.198 273.275 130.767 273.275H36.4931C16.6148 273.275 0.499999 257.156 0.5 237.271L0.500002 200.768C0.500002 180.884 16.6148 164.765 36.4932 164.765L130.767 164.765C151.198 164.765 167.76 148.198 167.76 127.762V36.5033C167.76 16.6191 183.875 0.5 203.753 0.5H240.247Z"
        className="stroke stroke-stroke"
        style={{ fill: `var(--${fill})` }}
      />
    </svg>
  );
};

export const Bible = ({
  glow = true,
  fill = 'gray',
  size = 256,
}: ShapesProps) => {
  const svgSize = formatSize(size, 265 / 217);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 265 217"
      fill="none"
      className="overflow-visible"
    >
      {glow && (
        <path
          d="M22.6281 2.17813L130.342 38.5952V216.303L11.9137 176.264C5.09368 173.958 0.5 167.544 0.5 160.325V18.1173C0.5 6.61039 11.76 -1.49626 22.6281 2.17813ZM252.967 176.205L131.342 216.309V38.598L242.491 1.94834C253.336 -1.6276 264.5 6.47356 264.5 17.9274V160.226C264.5 167.492 259.848 173.936 252.967 176.205Z"
          className="blur-[10vmin] dark:opacity-60"
          style={{ fill: `var(--${fill})` }}
        />
      )}
      <path
        d="M22.6281 2.17813L130.342 38.5952V216.303L11.9137 176.264C5.09368 173.958 0.5 167.544 0.5 160.325V18.1173C0.5 6.61039 11.76 -1.49626 22.6281 2.17813ZM252.967 176.205L131.342 216.309V38.598L242.491 1.94834C253.336 -1.6276 264.5 6.47356 264.5 17.9274V160.226C264.5 167.492 259.848 173.936 252.967 176.205Z"
        className="stroke stroke-stroke"
        style={{ fill: `var(--${fill})` }}
      />
    </svg>
  );
};

export const Circle = ({
  glow = true,
  fill = 'blue',
  size = 256,
}: ShapesProps) => {
  const svgSize = formatSize(size, 1 / 1);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 235 235"
      fill="none"
      className="overflow-visible"
    >
      {glow && (
        <path
          d="M234.5 117.5C234.5 182.117 182.117 234.5 117.5 234.5C52.8827 234.5 0.5 182.117 0.5 117.5C0.5 52.8827 52.8827 0.5 117.5 0.5C182.117 0.5 234.5 52.8827 234.5 117.5Z"
          className="blur-[10vmin] dark:opacity-60"
          style={{ fill: `var(--${fill})` }}
        />
      )}
      <path
        d="M234.5 117.5C234.5 182.117 182.117 234.5 117.5 234.5C52.8827 234.5 0.5 182.117 0.5 117.5C0.5 52.8827 52.8827 0.5 117.5 0.5C182.117 0.5 234.5 52.8827 234.5 117.5Z"
        className="stroke stroke-stroke"
        style={{ fill: `var(--${fill})` }}
      />
    </svg>
  );
};

export const Star = ({
  glow = true,
  fill = 'green',
  size = 256,
}: ShapesProps) => {
  const svgSize = formatSize(size, 265 / 253);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 265 253"
      fill="none"
      className="overflow-visible"
    >
      {glow && (
        <path
          d="M123.219 7.24189C126.14 -1.7473 138.86 -1.74729 141.781 7.2419L166.027 81.8512C167.468 86.2833 171.598 89.284 176.259 89.284H254.722C264.175 89.284 268.106 101.379 260.458 106.934L196.98 153.046C193.21 155.785 191.632 160.64 193.072 165.072L217.318 239.682C220.239 248.67 209.949 256.146 202.301 250.59L138.824 204.479C135.053 201.74 129.947 201.74 126.176 204.479L62.6989 250.59C55.0507 256.146 44.7607 248.67 47.6818 239.682L71.928 165.072C73.3683 160.64 71.7904 155.785 68.0197 153.046L4.5423 106.934C-3.10551 101.379 0.824715 89.284 10.2784 89.284H88.7407C93.4016 89.284 97.5324 86.2833 98.9728 81.8512L123.219 7.24189Z"
          className="blur-[10vmin] dark:opacity-60"
          style={{ fill: `var(--${fill})` }}
        />
      )}
      <path
        d="M123.219 7.24189C126.14 -1.7473 138.86 -1.74729 141.781 7.2419L166.027 81.8512C167.468 86.2833 171.598 89.284 176.259 89.284H254.722C264.175 89.284 268.106 101.379 260.458 106.934L196.98 153.046C193.21 155.785 191.632 160.64 193.072 165.072L217.318 239.682C220.239 248.67 209.949 256.146 202.301 250.59L138.824 204.479C135.053 201.74 129.947 201.74 126.176 204.479L62.6989 250.59C55.0507 256.146 44.7607 248.67 47.6818 239.682L71.928 165.072C73.3683 160.64 71.7904 155.785 68.0197 153.046L4.5423 106.934C-3.10551 101.379 0.824715 89.284 10.2784 89.284H88.7407C93.4016 89.284 97.5324 86.2833 98.9728 81.8512L123.219 7.24189Z"
        className="stroke stroke-stroke"
        style={{ fill: `var(--${fill})` }}
      />
    </svg>
  );
};

export const Hexagon = ({
  glow = true,
  fill = 'purple',
  size = 256,
}: ShapesProps) => {
  const svgSize = formatSize(size, 253 / 280);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 253 280"
      fill="none"
      className="overflow-visible"
    >
      {glow && (
        <path
          d="M105.27 6.21214C118.407 -1.40404 134.593 -1.40405 147.73 6.21214L231.268 54.6425C244.406 62.2588 252.5 76.3351 252.5 91.5697V188.43C252.5 203.665 244.406 217.741 231.268 225.357L147.73 273.788C134.593 281.404 118.407 281.404 105.27 273.788L21.7316 225.358C8.59408 217.741 0.5 203.665 0.5 188.43V91.5697C0.5 76.3351 8.59408 62.2588 21.7316 54.6425L105.27 6.21214Z"
          className="blur-[10vmin] dark:opacity-60"
          style={{ fill: `var(--${fill})` }}
        />
      )}
      <path
        d="M105.27 6.21214C118.407 -1.40404 134.593 -1.40405 147.73 6.21214L231.268 54.6425C244.406 62.2588 252.5 76.3351 252.5 91.5697V188.43C252.5 203.665 244.406 217.741 231.268 225.357L147.73 273.788C134.593 281.404 118.407 281.404 105.27 273.788L21.7316 225.358C8.59408 217.741 0.5 203.665 0.5 188.43V91.5697C0.5 76.3351 8.59408 62.2588 21.7316 54.6425L105.27 6.21214Z"
        className="stroke stroke-stroke"
        style={{ fill: `var(--${fill})` }}
      />
    </svg>
  );
};

export const Triangle = ({
  glow = true,
  fill = 'red',
  size = 256,
}: ShapesProps) => {
  const svgSize = formatSize(size, 215 / 193);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 215 193"
      fill="none"
      className="overflow-visible"
    >
      {glow && (
        <path
          d="M84.5531 14.7259C94.7541 -2.93441 120.246 -2.93439 130.447 14.726L210.17 152.745C220.375 170.412 207.626 192.5 187.223 192.5H27.7765C7.37437 192.5 -5.37514 170.412 4.82958 152.745L84.5531 14.7259Z"
          className="blur-[10vmin] dark:opacity-60"
          style={{ fill: `var(--${fill})` }}
        />
      )}
      <path
        d="M84.5531 14.7259C94.7541 -2.93441 120.246 -2.93439 130.447 14.726L210.17 152.745C220.375 170.412 207.626 192.5 187.223 192.5H27.7765C7.37437 192.5 -5.37514 170.412 4.82958 152.745L84.5531 14.7259Z"
        className="stroke stroke-stroke"
        style={{ fill: `var(--${fill})` }}
      />
    </svg>
  );
};
