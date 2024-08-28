import React from 'react';

export type LogoProps = {
  size: number;
  subText?: string;
};

export const Logo = ({ size = 128, subText }: LogoProps) => {
  function formatSize(
    size: number,
    aspectRatio: number
  ): { width: number; height: number } {
    const height = size;
    const width = Math.round(height * aspectRatio);

    return { width, height };
  }

  const svgSize = formatSize(size, 228 / 128);

  if (subText === undefined) {
    <svg
      width={svgSize.width}
      height={svgSize.height}
      viewBox="0 0 228 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128.113 13.1263C128.113 7.48886 128.113 4.67013 126.599 2.7393C126.238 2.27955 125.822 1.86563 125.361 1.50684C123.421 0 120.589 0 114.925 0C109.262 0 106.43 0 104.49 1.50684C104.029 1.86563 103.613 2.27955 103.252 2.7393C101.738 4.67013 101.738 7.48886 101.738 13.1263V16.9085C101.738 23.6206 101.738 26.9767 99.6435 29.062C97.5487 31.1472 94.177 31.1472 87.4338 31.1472H83.1871C77.5235 31.1472 74.6918 31.1472 72.752 32.654C72.2901 33.0128 71.8743 33.4267 71.5138 33.8865C70 35.8173 70 38.636 70 44.2735C70 49.9109 70 52.7296 71.5138 54.6605C71.8743 55.1202 72.2901 55.5341 72.752 55.8929C74.6918 57.3998 77.5235 57.3998 83.1871 57.3998H87.4338C94.177 57.3998 97.5487 57.3998 99.6435 59.485C101.738 61.5702 101.738 64.9263 101.738 71.6385V114.874C101.738 120.511 101.738 123.33 103.252 125.261C103.613 125.72 104.029 126.134 104.49 126.493C106.43 128 109.262 128 114.925 128C120.589 128 123.421 128 125.361 126.493C125.822 126.134 126.238 125.72 126.599 125.261C128.113 123.33 128.113 120.511 128.113 114.874V71.6385C128.113 64.9263 128.113 61.5702 130.207 59.485C132.302 57.3998 135.674 57.3998 142.417 57.3998H146.813C152.476 57.3998 155.308 57.3998 157.248 55.8929C157.71 55.5341 158.126 55.1202 158.486 54.6605C160 52.7296 160 49.9109 160 44.2735C160 38.636 160 35.8173 158.486 33.8865C158.126 33.4267 157.71 33.0128 157.248 32.654C155.308 31.1472 152.476 31.1472 146.813 31.1472H142.417C135.674 31.1472 132.302 31.1472 130.207 29.062C128.113 26.9767 128.113 23.6206 128.113 16.9085V13.1263Z"
        fill="#00A3FF"
      />
      <path
        d="M21.0831 39.0131C26.9986 39.0131 31.5489 40.0983 34.7341 42.2689C37.9699 44.389 39.3855 47.7206 38.9811 52.2637C38.8799 53.8285 38.3491 55.3934 37.3885 56.9582C36.4784 58.4726 35.1386 59.8355 33.369 61.047C31.5994 62.208 29.3496 63.0661 26.6194 63.6214V63.7728C31.9786 64.0252 35.897 65.4386 38.3744 68.0131C40.9023 70.537 42.0399 73.6162 41.7871 77.2507C41.6354 80.3803 40.7254 83.0809 39.0569 85.3525C37.439 87.5735 35.2397 89.2646 32.4589 90.4256C29.7287 91.5866 26.6446 92.1671 23.2066 92.1671H0L0.227516 88.8355C1.89597 88.785 3.10938 88.4569 3.86777 87.8512C4.62616 87.195 5.13175 86.2359 5.38454 84.9739C5.6879 83.7119 5.89013 82.1218 5.99125 80.2037L7.58386 49.3107C7.63442 47.9478 7.71026 46.7363 7.81138 45.6762C7.96306 44.5657 8.08946 43.6823 8.19057 43.0261C7.28051 43.0766 6.31989 43.1271 5.3087 43.1775C4.29752 43.228 3.38746 43.2785 2.57851 43.329L2.80603 39.1645C5.83958 39.1645 8.84784 39.1393 11.8308 39.0888C14.8138 39.0383 17.8979 39.0131 21.0831 39.0131ZM21.7657 66.4987C20.2995 66.4987 19.0102 66.5239 17.8979 66.5744C16.7856 66.5744 15.648 66.5997 14.4852 66.6501L13.651 82.1723C13.6004 83.5352 13.5246 84.7467 13.4234 85.8068C13.3223 86.8164 13.2212 87.6493 13.1201 88.3055C13.929 88.356 14.8391 88.3812 15.8503 88.3812C16.912 88.3812 17.8979 88.3812 18.808 88.3812C19.7686 88.3812 20.4764 88.3812 20.9315 88.3812C24.5717 88.3307 27.4536 87.3716 29.5771 85.5039C31.7511 83.5857 32.9393 80.9104 33.1415 77.4778C33.2932 74.7015 32.8381 72.5309 31.7764 70.9661C30.7147 69.3507 29.299 68.215 27.5294 67.5587C25.7599 66.852 23.8386 66.4987 21.7657 66.4987ZM21.0073 42.5718C19.6928 42.5718 18.631 42.7737 17.8221 43.1775C17.0131 43.5814 16.4317 44.2881 16.0778 45.2977C15.7239 46.2567 15.4964 47.6954 15.3952 49.6136L14.7127 62.9399C15.5722 62.9399 16.4317 62.9399 17.2912 62.9399C18.1507 62.8895 18.9597 62.839 19.718 62.7885C22.3471 62.6876 24.4453 62.107 26.0127 61.047C27.6305 59.9869 28.7934 58.6493 29.5012 57.0339C30.2596 55.3681 30.6641 53.6266 30.7147 51.8094C30.8663 49.2855 30.4366 47.3673 29.4254 46.0548C28.4142 44.7424 27.1502 43.8338 25.6335 43.329C24.1167 42.8242 22.5746 42.5718 21.0073 42.5718Z"
        fill="black"
      />
      <path
        d="M55.5068 53.4752C57.7819 53.4752 59.4504 54.2324 60.5121 55.7467C61.5739 57.2106 62.1047 59.1793 62.1047 61.6527C62.1047 63.0661 61.9531 64.7824 61.6497 66.8016C61.3969 68.7702 61.0683 70.8651 60.6638 73.0862C60.3099 75.3072 60.0065 77.4778 59.7537 79.5979C59.5009 81.718 59.3745 83.6362 59.3745 85.3525C59.3745 86.3116 59.5262 87.0183 59.8296 87.4726C60.1835 87.9269 60.6638 88.154 61.2705 88.154C62.0795 88.154 62.9137 87.6493 63.7732 86.6397C64.6833 85.5796 65.4922 83.7876 66.2 81.2637L69.0061 81.9452C68.8038 83.0052 68.4499 84.1915 67.9443 85.5039C67.4387 86.7659 66.7562 87.9774 65.8967 89.1384C65.0877 90.2489 64.1018 91.1828 62.939 91.9399C61.7761 92.6466 60.4363 93 58.9195 93C56.4421 93 54.6473 92.3438 53.535 91.0313C52.4732 89.7189 51.9424 87.8512 51.9424 85.4282C51.9424 83.4595 52.0688 81.4404 52.3215 79.3708C52.6249 77.3011 52.9535 75.2315 53.3075 73.1619C53.6614 71.0923 53.99 69.0731 54.2934 67.1044C54.5967 65.0853 54.7484 63.1419 54.7484 61.2742C54.7484 60.5675 54.5967 59.9112 54.2934 59.3055C54.0406 58.6493 53.5855 58.3212 52.9283 58.3212C52.1699 58.3212 51.3357 58.8512 50.4256 59.9112C49.5155 60.9208 48.7066 62.6876 47.9987 65.2115L45.1927 64.53C45.395 63.5709 45.7489 62.4856 46.2545 61.2742C46.7601 60.0122 47.4173 58.8007 48.2263 57.6397C49.0858 56.4282 50.097 55.4439 51.2598 54.6867C52.4732 53.879 53.8889 53.4752 55.5068 53.4752ZM59.2229 36.2115C60.588 36.2115 61.675 36.691 62.4839 37.6501C63.3434 38.5587 63.7732 39.745 63.7732 41.2089C63.7226 42.6223 63.2423 43.7833 62.3323 44.6919C61.4222 45.6005 60.3352 46.0548 59.0712 46.0548C57.7566 46.0548 56.6444 45.6005 55.7343 44.6919C54.8748 43.7833 54.4703 42.6223 54.5209 41.2089C54.5209 39.745 55.0012 38.5587 55.9618 37.6501C56.9224 36.691 58.0094 36.2115 59.2229 36.2115Z"
        fill="black"
      />
      <path
        d="M85.4672 35C85.265 36.4134 85.0374 37.9782 84.7846 39.6945C84.5824 41.4108 84.4054 43.0766 84.2538 44.6919C84.1021 46.2567 83.9504 47.5944 83.7987 48.705C83.6471 50.3708 83.4701 52.2132 83.2679 54.2324C83.0656 56.201 82.8381 58.2959 82.5853 60.517C82.3831 62.738 82.1556 64.9591 81.9028 67.1802H82.0544C83.0151 64.2019 84.0515 61.8042 85.1638 59.9869C86.3267 58.1697 87.5148 56.8068 88.7282 55.8982C89.9417 54.9391 91.1298 54.3081 92.2927 54.0052C93.4555 53.6519 94.5425 53.4752 95.5537 53.4752C97.9806 53.4752 99.9271 54.1567 101.393 55.5196C102.86 56.832 103.896 58.5483 104.503 60.6684C105.16 62.7885 105.489 65.0853 105.489 67.5587C105.489 71.0418 105.109 74.3229 104.351 77.4021C103.593 80.4308 102.379 83.1314 100.711 85.5039C99.0423 87.8259 96.8683 89.6684 94.1886 91.0313C91.5596 92.3438 88.3743 93 84.633 93C83.824 93 82.7876 92.9495 81.5236 92.8486C80.3102 92.7476 79.0209 92.5709 77.6558 92.3185C76.3413 92.0661 75.1278 91.7128 74.0155 91.2585C74.2683 86.6144 74.4959 82.4247 74.6981 78.6893C74.9509 74.9539 75.1784 71.3951 75.3806 68.0131C75.5829 64.5805 75.8104 61.0975 76.0632 57.564C76.316 53.98 76.6193 50.0426 76.9733 45.752C77.0238 44.591 77.0744 43.6823 77.1249 43.0261C77.2261 42.3194 77.3272 41.5622 77.4283 40.7546C76.5688 40.805 75.6587 40.8555 74.6981 40.906C73.7375 40.9565 72.8527 41.007 72.0437 41.0574L72.3471 37.1201C74.6223 37.1201 76.4424 37.0191 77.8075 36.8172C79.1726 36.5648 80.209 36.2872 80.9169 35.9843C81.6752 35.6815 82.2567 35.3534 82.6612 35H85.4672ZM93.1269 58.1697C91.8629 58.2202 90.6242 58.8764 89.4108 60.1384C88.1974 61.3499 87.0851 62.9904 86.0739 65.0601C85.1133 67.0792 84.2538 69.4012 83.4954 72.0261C82.737 74.6005 82.1303 77.2759 81.6752 80.0522C81.2202 82.8285 80.9674 85.5292 80.9169 88.154C81.4225 88.6588 82.1556 89.0374 83.1162 89.2898C84.1274 89.4917 85.0374 89.5927 85.8464 89.5927C87.9193 89.5422 89.6383 89.0627 91.0034 88.154C92.4191 87.1949 93.5566 85.933 94.4161 84.3681C95.3262 82.8033 96.0088 81.0618 96.4638 79.1436C96.9694 77.2254 97.298 75.3072 97.4497 73.389C97.6519 71.4204 97.7278 69.5779 97.6772 67.8616C97.6772 64.6815 97.2727 62.2585 96.4638 60.5927C95.7054 58.9269 94.5931 58.1192 93.1269 58.1697Z"
        fill="black"
      />
      <path
        d="M125.716 35C125.564 36.3629 125.362 37.8268 125.109 39.3916C124.857 40.906 124.629 42.3951 124.427 43.859C124.225 45.3229 124.048 46.6606 123.896 47.8721C123.492 50.9008 123.112 53.9295 122.758 56.9582C122.455 59.9365 122.152 62.839 121.848 65.6658C121.545 68.4421 121.292 71.067 121.09 73.5405C120.888 75.9634 120.711 78.134 120.559 80.0522C120.458 81.9704 120.407 83.5352 120.407 84.7467C120.407 85.7058 120.509 86.5135 120.711 87.1697C120.913 87.8259 121.393 88.154 122.152 88.154C122.91 88.154 123.719 87.6493 124.579 86.6397C125.489 85.6301 126.323 83.8381 127.081 81.2637L129.811 82.0209C129.609 82.98 129.255 84.1158 128.75 85.4282C128.244 86.6902 127.562 87.9017 126.702 89.0627C125.893 90.1732 124.882 91.107 123.669 91.8642C122.455 92.6214 121.039 93 119.422 93C117.45 93 115.908 92.47 114.795 91.4099C113.683 90.3499 113.127 88.7093 113.127 86.4883C113.076 85.0244 113.127 83.1062 113.279 80.7337C113.43 78.3612 113.633 75.7363 113.885 72.859C114.138 69.9312 114.416 66.9025 114.72 63.7728C115.073 60.5927 115.427 57.4883 115.781 54.4595C116.186 51.3803 116.565 48.503 116.919 45.8277C117.121 44.6162 117.273 43.6571 117.374 42.9504C117.475 42.1932 117.576 41.4613 117.677 40.7546C116.818 40.805 115.908 40.8555 114.947 40.906C113.986 40.9565 113.102 41.007 112.293 41.0574L112.672 37.1201C114.947 37.1201 116.742 37.0191 118.056 36.8172C119.422 36.5648 120.458 36.2872 121.166 35.9843C121.924 35.6815 122.506 35.3534 122.91 35H125.716Z"
        fill="black"
      />
      <path
        d="M152.035 53.4752C154.007 53.4752 155.802 53.7781 157.42 54.3838C159.088 54.9391 160.428 55.8729 161.439 57.1854C162.45 58.4978 162.956 60.2646 162.956 62.4856C162.956 64.5553 162.273 66.3473 160.908 67.8616C159.543 69.3255 157.774 70.537 155.6 71.4961C153.426 72.4552 151.075 73.2376 148.547 73.8433C146.019 74.3986 143.592 74.8277 141.266 75.1305C141.266 78.1593 141.595 80.6327 142.252 82.5509C142.909 84.4691 143.819 85.8825 144.982 86.7911C146.196 87.6997 147.637 88.154 149.305 88.154C150.569 88.154 151.883 87.8764 153.249 87.3212C154.664 86.7659 156.029 85.8825 157.344 84.671C158.658 83.4091 159.847 81.718 160.908 79.5979L164.018 81.2637C162.602 84.0905 161.06 86.3873 159.391 88.154C157.723 89.8703 155.928 91.107 154.007 91.8642C152.086 92.6214 150.013 93 147.788 93C143.036 93 139.446 91.5614 137.019 88.6841C134.592 85.7563 133.379 81.718 133.379 76.5692C133.379 73.8433 133.758 71.1175 134.516 68.3916C135.275 65.6153 136.412 63.1166 137.929 60.8956C139.446 58.624 141.392 56.832 143.769 55.5196C146.145 54.1567 148.9 53.4752 152.035 53.4752ZM151.049 56.8825C148.926 56.8825 147.181 57.6144 145.816 59.0783C144.502 60.4917 143.491 62.3342 142.783 64.6057C142.075 66.8773 141.62 69.2245 141.418 71.6475C144.097 71.2437 146.524 70.6127 148.698 69.7546C150.872 68.846 152.591 67.7354 153.855 66.423C155.17 65.0601 155.802 63.5457 155.751 61.8799C155.751 60.3655 155.321 59.154 154.462 58.2454C153.653 57.3368 152.515 56.8825 151.049 56.8825Z"
        fill="black"
      />
      <path
        d="M177.411 53.4752C179.687 53.4752 181.355 54.2324 182.417 55.7467C183.479 57.2106 184.009 59.1793 184.009 61.6527C184.009 63.0661 183.858 64.7824 183.554 66.8016C183.302 68.7702 182.973 70.8651 182.568 73.0862C182.215 75.3072 181.911 77.4778 181.658 79.5979C181.406 81.718 181.279 83.6362 181.279 85.3525C181.279 86.3116 181.431 87.0183 181.734 87.4726C182.088 87.9269 182.568 88.154 183.175 88.154C183.984 88.154 184.818 87.6493 185.678 86.6397C186.588 85.5796 187.397 83.7876 188.105 81.2637L190.911 81.9452C190.708 83.0052 190.355 84.1915 189.849 85.5039C189.343 86.7659 188.661 87.9774 187.801 89.1384C186.992 90.2489 186.007 91.1828 184.844 91.9399C183.681 92.6466 182.341 93 180.824 93C178.347 93 176.552 92.3438 175.44 91.0313C174.378 89.7189 173.847 87.8512 173.847 85.4282C173.847 83.4595 173.973 81.4404 174.226 79.3708C174.53 77.3011 174.858 75.2315 175.212 73.1619C175.566 71.0923 175.895 69.0731 176.198 67.1044C176.501 65.0853 176.653 63.1419 176.653 61.2742C176.653 60.5675 176.501 59.9112 176.198 59.3055C175.945 58.6493 175.49 58.3212 174.833 58.3212C174.075 58.3212 173.24 58.8512 172.33 59.9112C171.42 60.9208 170.611 62.6876 169.903 65.2115L167.097 64.53C167.3 63.5709 167.654 62.4856 168.159 61.2742C168.665 60.0122 169.322 58.8007 170.131 57.6397C170.99 56.4282 172.002 55.4439 173.164 54.6867C174.378 53.879 175.794 53.4752 177.411 53.4752ZM181.128 36.2115C182.493 36.2115 183.58 36.691 184.389 37.6501C185.248 38.5587 185.678 39.745 185.678 41.2089C185.627 42.6223 185.147 43.7833 184.237 44.6919C183.327 45.6005 182.24 46.0548 180.976 46.0548C179.661 46.0548 178.549 45.6005 177.639 44.6919C176.779 43.7833 176.375 42.6223 176.426 41.2089C176.426 39.745 176.906 38.5587 177.866 37.6501C178.827 36.691 179.914 36.2115 181.128 36.2115Z"
        fill="black"
      />
      <path
        d="M213.363 53.4752C216.093 53.4752 218.571 54.1314 220.795 55.4439C223.02 56.7058 224.764 58.5988 226.028 61.1227C227.343 63.5962 228 66.5997 228 70.1332C228 74.1715 227.242 77.9321 225.725 81.4151C224.259 84.8982 222.135 87.6997 219.354 89.8198C216.574 91.9399 213.211 93 209.268 93C205.931 93 203.15 92.2428 200.926 90.7285C198.752 89.2141 197.134 87.1697 196.072 84.5953C195.01 81.9704 194.479 79.0931 194.479 75.9634C194.479 71.8747 195.238 68.1393 196.754 64.7572C198.271 61.3246 200.445 58.5988 203.277 56.5796C206.108 54.51 209.47 53.4752 213.363 53.4752ZM212.226 57.0339C210.203 56.9835 208.459 57.7154 206.993 59.2298C205.577 60.6936 204.465 62.6876 203.656 65.2115C202.847 67.7354 202.417 70.537 202.367 73.6162C202.367 75.2315 202.468 76.973 202.67 78.8407C202.923 80.658 203.327 82.3742 203.883 83.9896C204.49 85.5544 205.299 86.8416 206.31 87.8512C207.321 88.8607 208.611 89.3908 210.178 89.4413C211.947 89.4413 213.439 88.9112 214.652 87.8512C215.916 86.7406 216.928 85.3272 217.686 83.611C218.495 81.8442 219.076 79.9765 219.43 78.0078C219.835 76.0392 220.062 74.1967 220.113 72.4804C220.163 70.8146 220.087 69.0983 219.885 67.3316C219.683 65.5648 219.279 63.899 218.672 62.3342C218.116 60.7694 217.307 59.5074 216.245 58.5483C215.234 57.5387 213.894 57.0339 212.226 57.0339Z"
        fill="black"
      />
    </svg>;
  } else {
    return (
      <div className="flex items-center" style={{ gap: svgSize.width / 12 }}>
        <svg
          width={svgSize.width}
          height={svgSize.height}
          viewBox="0 0 228 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128.113 13.1263C128.113 7.48886 128.113 4.67013 126.599 2.7393C126.238 2.27955 125.822 1.86563 125.361 1.50684C123.421 0 120.589 0 114.925 0C109.262 0 106.43 0 104.49 1.50684C104.029 1.86563 103.613 2.27955 103.252 2.7393C101.738 4.67013 101.738 7.48886 101.738 13.1263V16.9085C101.738 23.6206 101.738 26.9767 99.6435 29.062C97.5487 31.1472 94.177 31.1472 87.4338 31.1472H83.1871C77.5235 31.1472 74.6918 31.1472 72.752 32.654C72.2901 33.0128 71.8743 33.4267 71.5138 33.8865C70 35.8173 70 38.636 70 44.2735C70 49.9109 70 52.7296 71.5138 54.6605C71.8743 55.1202 72.2901 55.5341 72.752 55.8929C74.6918 57.3998 77.5235 57.3998 83.1871 57.3998H87.4338C94.177 57.3998 97.5487 57.3998 99.6435 59.485C101.738 61.5702 101.738 64.9263 101.738 71.6385V114.874C101.738 120.511 101.738 123.33 103.252 125.261C103.613 125.72 104.029 126.134 104.49 126.493C106.43 128 109.262 128 114.925 128C120.589 128 123.421 128 125.361 126.493C125.822 126.134 126.238 125.72 126.599 125.261C128.113 123.33 128.113 120.511 128.113 114.874V71.6385C128.113 64.9263 128.113 61.5702 130.207 59.485C132.302 57.3998 135.674 57.3998 142.417 57.3998H146.813C152.476 57.3998 155.308 57.3998 157.248 55.8929C157.71 55.5341 158.126 55.1202 158.486 54.6605C160 52.7296 160 49.9109 160 44.2735C160 38.636 160 35.8173 158.486 33.8865C158.126 33.4267 157.71 33.0128 157.248 32.654C155.308 31.1472 152.476 31.1472 146.813 31.1472H142.417C135.674 31.1472 132.302 31.1472 130.207 29.062C128.113 26.9767 128.113 23.6206 128.113 16.9085V13.1263Z"
            fill="#00A3FF"
          />
          <path
            d="M21.0831 39.0131C26.9986 39.0131 31.5489 40.0983 34.7341 42.2689C37.9699 44.389 39.3855 47.7206 38.9811 52.2637C38.8799 53.8285 38.3491 55.3934 37.3885 56.9582C36.4784 58.4726 35.1386 59.8355 33.369 61.047C31.5994 62.208 29.3496 63.0661 26.6194 63.6214V63.7728C31.9786 64.0252 35.897 65.4386 38.3744 68.0131C40.9023 70.537 42.0399 73.6162 41.7871 77.2507C41.6354 80.3803 40.7254 83.0809 39.0569 85.3525C37.439 87.5735 35.2397 89.2646 32.4589 90.4256C29.7287 91.5866 26.6446 92.1671 23.2066 92.1671H0L0.227516 88.8355C1.89597 88.785 3.10938 88.4569 3.86777 87.8512C4.62616 87.195 5.13175 86.2359 5.38454 84.9739C5.6879 83.7119 5.89013 82.1218 5.99125 80.2037L7.58386 49.3107C7.63442 47.9478 7.71026 46.7363 7.81138 45.6762C7.96306 44.5657 8.08946 43.6823 8.19057 43.0261C7.28051 43.0766 6.31989 43.1271 5.3087 43.1775C4.29752 43.228 3.38746 43.2785 2.57851 43.329L2.80603 39.1645C5.83958 39.1645 8.84784 39.1393 11.8308 39.0888C14.8138 39.0383 17.8979 39.0131 21.0831 39.0131ZM21.7657 66.4987C20.2995 66.4987 19.0102 66.5239 17.8979 66.5744C16.7856 66.5744 15.648 66.5997 14.4852 66.6501L13.651 82.1723C13.6004 83.5352 13.5246 84.7467 13.4234 85.8068C13.3223 86.8164 13.2212 87.6493 13.1201 88.3055C13.929 88.356 14.8391 88.3812 15.8503 88.3812C16.912 88.3812 17.8979 88.3812 18.808 88.3812C19.7686 88.3812 20.4764 88.3812 20.9315 88.3812C24.5717 88.3307 27.4536 87.3716 29.5771 85.5039C31.7511 83.5857 32.9393 80.9104 33.1415 77.4778C33.2932 74.7015 32.8381 72.5309 31.7764 70.9661C30.7147 69.3507 29.299 68.215 27.5294 67.5587C25.7599 66.852 23.8386 66.4987 21.7657 66.4987ZM21.0073 42.5718C19.6928 42.5718 18.631 42.7737 17.8221 43.1775C17.0131 43.5814 16.4317 44.2881 16.0778 45.2977C15.7239 46.2567 15.4964 47.6954 15.3952 49.6136L14.7127 62.9399C15.5722 62.9399 16.4317 62.9399 17.2912 62.9399C18.1507 62.8895 18.9597 62.839 19.718 62.7885C22.3471 62.6876 24.4453 62.107 26.0127 61.047C27.6305 59.9869 28.7934 58.6493 29.5012 57.0339C30.2596 55.3681 30.6641 53.6266 30.7147 51.8094C30.8663 49.2855 30.4366 47.3673 29.4254 46.0548C28.4142 44.7424 27.1502 43.8338 25.6335 43.329C24.1167 42.8242 22.5746 42.5718 21.0073 42.5718Z"
            fill="black"
          />
          <path
            d="M55.5068 53.4752C57.7819 53.4752 59.4504 54.2324 60.5121 55.7467C61.5739 57.2106 62.1047 59.1793 62.1047 61.6527C62.1047 63.0661 61.9531 64.7824 61.6497 66.8016C61.3969 68.7702 61.0683 70.8651 60.6638 73.0862C60.3099 75.3072 60.0065 77.4778 59.7537 79.5979C59.5009 81.718 59.3745 83.6362 59.3745 85.3525C59.3745 86.3116 59.5262 87.0183 59.8296 87.4726C60.1835 87.9269 60.6638 88.154 61.2705 88.154C62.0795 88.154 62.9137 87.6493 63.7732 86.6397C64.6833 85.5796 65.4922 83.7876 66.2 81.2637L69.0061 81.9452C68.8038 83.0052 68.4499 84.1915 67.9443 85.5039C67.4387 86.7659 66.7562 87.9774 65.8967 89.1384C65.0877 90.2489 64.1018 91.1828 62.939 91.9399C61.7761 92.6466 60.4363 93 58.9195 93C56.4421 93 54.6473 92.3438 53.535 91.0313C52.4732 89.7189 51.9424 87.8512 51.9424 85.4282C51.9424 83.4595 52.0688 81.4404 52.3215 79.3708C52.6249 77.3011 52.9535 75.2315 53.3075 73.1619C53.6614 71.0923 53.99 69.0731 54.2934 67.1044C54.5967 65.0853 54.7484 63.1419 54.7484 61.2742C54.7484 60.5675 54.5967 59.9112 54.2934 59.3055C54.0406 58.6493 53.5855 58.3212 52.9283 58.3212C52.1699 58.3212 51.3357 58.8512 50.4256 59.9112C49.5155 60.9208 48.7066 62.6876 47.9987 65.2115L45.1927 64.53C45.395 63.5709 45.7489 62.4856 46.2545 61.2742C46.7601 60.0122 47.4173 58.8007 48.2263 57.6397C49.0858 56.4282 50.097 55.4439 51.2598 54.6867C52.4732 53.879 53.8889 53.4752 55.5068 53.4752ZM59.2229 36.2115C60.588 36.2115 61.675 36.691 62.4839 37.6501C63.3434 38.5587 63.7732 39.745 63.7732 41.2089C63.7226 42.6223 63.2423 43.7833 62.3323 44.6919C61.4222 45.6005 60.3352 46.0548 59.0712 46.0548C57.7566 46.0548 56.6444 45.6005 55.7343 44.6919C54.8748 43.7833 54.4703 42.6223 54.5209 41.2089C54.5209 39.745 55.0012 38.5587 55.9618 37.6501C56.9224 36.691 58.0094 36.2115 59.2229 36.2115Z"
            fill="black"
          />
          <path
            d="M85.4672 35C85.265 36.4134 85.0374 37.9782 84.7846 39.6945C84.5824 41.4108 84.4054 43.0766 84.2538 44.6919C84.1021 46.2567 83.9504 47.5944 83.7987 48.705C83.6471 50.3708 83.4701 52.2132 83.2679 54.2324C83.0656 56.201 82.8381 58.2959 82.5853 60.517C82.3831 62.738 82.1556 64.9591 81.9028 67.1802H82.0544C83.0151 64.2019 84.0515 61.8042 85.1638 59.9869C86.3267 58.1697 87.5148 56.8068 88.7282 55.8982C89.9417 54.9391 91.1298 54.3081 92.2927 54.0052C93.4555 53.6519 94.5425 53.4752 95.5537 53.4752C97.9806 53.4752 99.9271 54.1567 101.393 55.5196C102.86 56.832 103.896 58.5483 104.503 60.6684C105.16 62.7885 105.489 65.0853 105.489 67.5587C105.489 71.0418 105.109 74.3229 104.351 77.4021C103.593 80.4308 102.379 83.1314 100.711 85.5039C99.0423 87.8259 96.8683 89.6684 94.1886 91.0313C91.5596 92.3438 88.3743 93 84.633 93C83.824 93 82.7876 92.9495 81.5236 92.8486C80.3102 92.7476 79.0209 92.5709 77.6558 92.3185C76.3413 92.0661 75.1278 91.7128 74.0155 91.2585C74.2683 86.6144 74.4959 82.4247 74.6981 78.6893C74.9509 74.9539 75.1784 71.3951 75.3806 68.0131C75.5829 64.5805 75.8104 61.0975 76.0632 57.564C76.316 53.98 76.6193 50.0426 76.9733 45.752C77.0238 44.591 77.0744 43.6823 77.1249 43.0261C77.2261 42.3194 77.3272 41.5622 77.4283 40.7546C76.5688 40.805 75.6587 40.8555 74.6981 40.906C73.7375 40.9565 72.8527 41.007 72.0437 41.0574L72.3471 37.1201C74.6223 37.1201 76.4424 37.0191 77.8075 36.8172C79.1726 36.5648 80.209 36.2872 80.9169 35.9843C81.6752 35.6815 82.2567 35.3534 82.6612 35H85.4672ZM93.1269 58.1697C91.8629 58.2202 90.6242 58.8764 89.4108 60.1384C88.1974 61.3499 87.0851 62.9904 86.0739 65.0601C85.1133 67.0792 84.2538 69.4012 83.4954 72.0261C82.737 74.6005 82.1303 77.2759 81.6752 80.0522C81.2202 82.8285 80.9674 85.5292 80.9169 88.154C81.4225 88.6588 82.1556 89.0374 83.1162 89.2898C84.1274 89.4917 85.0374 89.5927 85.8464 89.5927C87.9193 89.5422 89.6383 89.0627 91.0034 88.154C92.4191 87.1949 93.5566 85.933 94.4161 84.3681C95.3262 82.8033 96.0088 81.0618 96.4638 79.1436C96.9694 77.2254 97.298 75.3072 97.4497 73.389C97.6519 71.4204 97.7278 69.5779 97.6772 67.8616C97.6772 64.6815 97.2727 62.2585 96.4638 60.5927C95.7054 58.9269 94.5931 58.1192 93.1269 58.1697Z"
            fill="black"
          />
          <path
            d="M125.716 35C125.564 36.3629 125.362 37.8268 125.109 39.3916C124.857 40.906 124.629 42.3951 124.427 43.859C124.225 45.3229 124.048 46.6606 123.896 47.8721C123.492 50.9008 123.112 53.9295 122.758 56.9582C122.455 59.9365 122.152 62.839 121.848 65.6658C121.545 68.4421 121.292 71.067 121.09 73.5405C120.888 75.9634 120.711 78.134 120.559 80.0522C120.458 81.9704 120.407 83.5352 120.407 84.7467C120.407 85.7058 120.509 86.5135 120.711 87.1697C120.913 87.8259 121.393 88.154 122.152 88.154C122.91 88.154 123.719 87.6493 124.579 86.6397C125.489 85.6301 126.323 83.8381 127.081 81.2637L129.811 82.0209C129.609 82.98 129.255 84.1158 128.75 85.4282C128.244 86.6902 127.562 87.9017 126.702 89.0627C125.893 90.1732 124.882 91.107 123.669 91.8642C122.455 92.6214 121.039 93 119.422 93C117.45 93 115.908 92.47 114.795 91.4099C113.683 90.3499 113.127 88.7093 113.127 86.4883C113.076 85.0244 113.127 83.1062 113.279 80.7337C113.43 78.3612 113.633 75.7363 113.885 72.859C114.138 69.9312 114.416 66.9025 114.72 63.7728C115.073 60.5927 115.427 57.4883 115.781 54.4595C116.186 51.3803 116.565 48.503 116.919 45.8277C117.121 44.6162 117.273 43.6571 117.374 42.9504C117.475 42.1932 117.576 41.4613 117.677 40.7546C116.818 40.805 115.908 40.8555 114.947 40.906C113.986 40.9565 113.102 41.007 112.293 41.0574L112.672 37.1201C114.947 37.1201 116.742 37.0191 118.056 36.8172C119.422 36.5648 120.458 36.2872 121.166 35.9843C121.924 35.6815 122.506 35.3534 122.91 35H125.716Z"
            fill="black"
          />
          <path
            d="M152.035 53.4752C154.007 53.4752 155.802 53.7781 157.42 54.3838C159.088 54.9391 160.428 55.8729 161.439 57.1854C162.45 58.4978 162.956 60.2646 162.956 62.4856C162.956 64.5553 162.273 66.3473 160.908 67.8616C159.543 69.3255 157.774 70.537 155.6 71.4961C153.426 72.4552 151.075 73.2376 148.547 73.8433C146.019 74.3986 143.592 74.8277 141.266 75.1305C141.266 78.1593 141.595 80.6327 142.252 82.5509C142.909 84.4691 143.819 85.8825 144.982 86.7911C146.196 87.6997 147.637 88.154 149.305 88.154C150.569 88.154 151.883 87.8764 153.249 87.3212C154.664 86.7659 156.029 85.8825 157.344 84.671C158.658 83.4091 159.847 81.718 160.908 79.5979L164.018 81.2637C162.602 84.0905 161.06 86.3873 159.391 88.154C157.723 89.8703 155.928 91.107 154.007 91.8642C152.086 92.6214 150.013 93 147.788 93C143.036 93 139.446 91.5614 137.019 88.6841C134.592 85.7563 133.379 81.718 133.379 76.5692C133.379 73.8433 133.758 71.1175 134.516 68.3916C135.275 65.6153 136.412 63.1166 137.929 60.8956C139.446 58.624 141.392 56.832 143.769 55.5196C146.145 54.1567 148.9 53.4752 152.035 53.4752ZM151.049 56.8825C148.926 56.8825 147.181 57.6144 145.816 59.0783C144.502 60.4917 143.491 62.3342 142.783 64.6057C142.075 66.8773 141.62 69.2245 141.418 71.6475C144.097 71.2437 146.524 70.6127 148.698 69.7546C150.872 68.846 152.591 67.7354 153.855 66.423C155.17 65.0601 155.802 63.5457 155.751 61.8799C155.751 60.3655 155.321 59.154 154.462 58.2454C153.653 57.3368 152.515 56.8825 151.049 56.8825Z"
            fill="black"
          />
          <path
            d="M177.411 53.4752C179.687 53.4752 181.355 54.2324 182.417 55.7467C183.479 57.2106 184.009 59.1793 184.009 61.6527C184.009 63.0661 183.858 64.7824 183.554 66.8016C183.302 68.7702 182.973 70.8651 182.568 73.0862C182.215 75.3072 181.911 77.4778 181.658 79.5979C181.406 81.718 181.279 83.6362 181.279 85.3525C181.279 86.3116 181.431 87.0183 181.734 87.4726C182.088 87.9269 182.568 88.154 183.175 88.154C183.984 88.154 184.818 87.6493 185.678 86.6397C186.588 85.5796 187.397 83.7876 188.105 81.2637L190.911 81.9452C190.708 83.0052 190.355 84.1915 189.849 85.5039C189.343 86.7659 188.661 87.9774 187.801 89.1384C186.992 90.2489 186.007 91.1828 184.844 91.9399C183.681 92.6466 182.341 93 180.824 93C178.347 93 176.552 92.3438 175.44 91.0313C174.378 89.7189 173.847 87.8512 173.847 85.4282C173.847 83.4595 173.973 81.4404 174.226 79.3708C174.53 77.3011 174.858 75.2315 175.212 73.1619C175.566 71.0923 175.895 69.0731 176.198 67.1044C176.501 65.0853 176.653 63.1419 176.653 61.2742C176.653 60.5675 176.501 59.9112 176.198 59.3055C175.945 58.6493 175.49 58.3212 174.833 58.3212C174.075 58.3212 173.24 58.8512 172.33 59.9112C171.42 60.9208 170.611 62.6876 169.903 65.2115L167.097 64.53C167.3 63.5709 167.654 62.4856 168.159 61.2742C168.665 60.0122 169.322 58.8007 170.131 57.6397C170.99 56.4282 172.002 55.4439 173.164 54.6867C174.378 53.879 175.794 53.4752 177.411 53.4752ZM181.128 36.2115C182.493 36.2115 183.58 36.691 184.389 37.6501C185.248 38.5587 185.678 39.745 185.678 41.2089C185.627 42.6223 185.147 43.7833 184.237 44.6919C183.327 45.6005 182.24 46.0548 180.976 46.0548C179.661 46.0548 178.549 45.6005 177.639 44.6919C176.779 43.7833 176.375 42.6223 176.426 41.2089C176.426 39.745 176.906 38.5587 177.866 37.6501C178.827 36.691 179.914 36.2115 181.128 36.2115Z"
            fill="black"
          />
          <path
            d="M213.363 53.4752C216.093 53.4752 218.571 54.1314 220.795 55.4439C223.02 56.7058 224.764 58.5988 226.028 61.1227C227.343 63.5962 228 66.5997 228 70.1332C228 74.1715 227.242 77.9321 225.725 81.4151C224.259 84.8982 222.135 87.6997 219.354 89.8198C216.574 91.9399 213.211 93 209.268 93C205.931 93 203.15 92.2428 200.926 90.7285C198.752 89.2141 197.134 87.1697 196.072 84.5953C195.01 81.9704 194.479 79.0931 194.479 75.9634C194.479 71.8747 195.238 68.1393 196.754 64.7572C198.271 61.3246 200.445 58.5988 203.277 56.5796C206.108 54.51 209.47 53.4752 213.363 53.4752ZM212.226 57.0339C210.203 56.9835 208.459 57.7154 206.993 59.2298C205.577 60.6936 204.465 62.6876 203.656 65.2115C202.847 67.7354 202.417 70.537 202.367 73.6162C202.367 75.2315 202.468 76.973 202.67 78.8407C202.923 80.658 203.327 82.3742 203.883 83.9896C204.49 85.5544 205.299 86.8416 206.31 87.8512C207.321 88.8607 208.611 89.3908 210.178 89.4413C211.947 89.4413 213.439 88.9112 214.652 87.8512C215.916 86.7406 216.928 85.3272 217.686 83.611C218.495 81.8442 219.076 79.9765 219.43 78.0078C219.835 76.0392 220.062 74.1967 220.113 72.4804C220.163 70.8146 220.087 69.0983 219.885 67.3316C219.683 65.5648 219.279 63.899 218.672 62.3342C218.116 60.7694 217.307 59.5074 216.245 58.5483C215.234 57.5387 213.894 57.0339 212.226 57.0339Z"
            fill="black"
          />
        </svg>
        <h1
          style={{ fontSize: svgSize.height / 1.7 }}
          className="whitespace-nowrap italic"
        >
          {subText}
        </h1>
      </div>
    );
  }
};

export type IconProps = {
  size: number;
};

export const Icon = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.4669 13.1263C77.4669 7.48886 77.4669 4.67013 75.9699 2.7393C75.6134 2.27955 75.2022 1.86563 74.7455 1.50684C72.8273 0 70.0269 0 64.4263 0C58.8257 0 56.0254 0 54.1072 1.50684C53.6504 1.86563 53.2392 2.27955 52.8828 2.7393C51.3858 4.67013 51.3858 7.48886 51.3858 13.1263V16.9085C51.3858 23.6206 51.3858 26.9767 49.3142 29.062C47.2426 31.1472 43.9084 31.1472 37.2401 31.1472H33.0406C27.4399 31.1472 24.6396 31.1472 22.7214 32.654C22.2647 33.0128 21.8534 33.4267 21.497 33.8865C20 35.8173 20 38.636 20 44.2735C20 49.9109 20 52.7296 21.497 54.6605C21.8534 55.1202 22.2647 55.5341 22.7214 55.8929C24.6396 57.3998 27.4399 57.3998 33.0406 57.3998H37.2401C43.9084 57.3998 47.2426 57.3998 49.3142 59.485C51.3858 61.5702 51.3858 64.9263 51.3858 71.6385V114.874C51.3858 120.511 51.3858 123.33 52.8828 125.261C53.2392 125.72 53.6504 126.134 54.1072 126.493C56.0254 128 58.8257 128 64.4263 128C70.0269 128 72.8273 128 74.7455 126.493C75.2022 126.134 75.6134 125.72 75.9699 125.261C77.4669 123.33 77.4669 120.511 77.4669 114.874V71.6385C77.4669 64.9263 77.4669 61.5702 79.5385 59.485C81.6101 57.3998 84.9442 57.3998 91.6126 57.3998H95.9594C101.56 57.3998 104.36 57.3998 106.279 55.8929C106.735 55.5341 107.147 55.1202 107.503 54.6605C109 52.7296 109 49.9109 109 44.2735C109 38.636 109 35.8173 107.503 33.8865C107.147 33.4267 106.735 33.0128 106.279 32.654C104.36 31.1472 101.56 31.1472 95.9594 31.1472H91.6126C84.9442 31.1472 81.6101 31.1472 79.5385 29.062C77.4669 26.9767 77.4669 23.6206 77.4669 16.9085V13.1263Z"
        fill="#00A3FF"
      />
    </svg>
  );
};
