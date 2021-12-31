/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import Link from "next/link";
import { useMemo } from "react";


type Props = {


  isLink?: boolean;

  id?: string;
};

const GitcoinLogo = ({


  isLink = true,

  id = "",
}: Props) => {

  const markup = useMemo(
    () => (
      /*
      this one had GITCOIN text with it also, which is an issue in mobile view so only-logo I suggested to Sid Sir
      & so now changing it :)
      <svg
        width="246px"
        height="68px"
        viewBox="0 0 850 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M318.7 157.299H357.8C357.8 161.299 357.6 164.999 357.3 168.299C357 171.599 356.3 174.599 355.3 177.399C353.9 181.399 352 184.899 349.6 187.999C347.2 190.999 344.3 193.599 341.1 195.599C337.9 197.599 334.3 199.199 330.4 200.199C326.5 201.299 322.4 201.799 318.1 201.799C312.2 201.799 306.8 200.799 301.9 198.899C297.1 196.999 292.9 194.199 289.4 190.799C285.9 187.199 283.2 182.999 281.3 178.099C279.4 173.099 278.4 167.699 278.4 161.699C278.4 155.799 279.3 150.399 281.2 145.499C283.1 140.499 285.9 136.299 289.3 132.799C292.9 129.299 297.1 126.599 302.1 124.699C307.1 122.799 312.6 121.799 318.7 121.799C326.6 121.799 333.5 123.499 339.5 126.899C345.5 130.299 350.2 135.599 353.7 142.799L335 150.499C333.3 146.299 331 143.399 328.2 141.599C325.5 139.799 322.3 138.899 318.8 138.899C315.9 138.899 313.2 139.499 310.8 140.599C308.4 141.699 306.3 143.199 304.6 145.299C302.9 147.299 301.6 149.799 300.6 152.599C299.7 155.499 299.2 158.699 299.2 162.199C299.2 165.399 299.6 168.399 300.4 171.099C301.3 173.799 302.5 176.199 304.2 178.199C305.9 180.199 308 181.799 310.4 182.899C312.9 183.999 315.8 184.499 319 184.499C320.9 184.499 322.8 184.299 324.6 183.899C326.4 183.399 328 182.699 329.4 181.799C330.9 180.799 332.1 179.499 333 177.999C333.9 176.499 334.6 174.599 334.9 172.399H318.7V157.299ZM455 139.799V201.799H434V139.799H417V121.799H472V139.799H455ZM545 149.199C540.4 143.599 534.8 140.799 528.1 140.799C525.1 140.799 522.4 141.299 519.8 142.399C517.3 143.499 515.2 144.999 513.3 146.799C511.5 148.599 510 150.799 509 153.399C508 155.999 507.5 158.699 507.5 161.699C507.5 164.699 508 167.499 509 170.099C510.1 172.699 511.5 174.899 513.3 176.799C515.2 178.699 517.4 180.199 519.9 181.199C522.4 182.299 525.1 182.799 528 182.799C534.3 182.799 540 180.099 545 174.699V198.099L543 198.799C540 199.899 537.2 200.599 534.5 201.099C531.9 201.599 529.3 201.899 526.7 201.899C521.5 201.899 516.4 200.899 511.6 198.999C506.8 196.999 502.6 194.199 498.9 190.599C495.3 186.999 492.3 182.699 490.1 177.799C487.9 172.799 486.8 167.399 486.8 161.599C486.8 155.799 487.9 150.399 490 145.599C492.2 140.699 495.1 136.499 498.8 132.999C502.5 129.399 506.8 126.699 511.6 124.699C516.4 122.699 521.5 121.699 526.8 121.699C529.8 121.699 532.8 121.999 535.7 122.699C538.7 123.299 541.8 124.299 545 125.599V149.199ZM586.2 161.799C586.2 164.799 586.8 167.599 587.9 170.199C589 172.799 590.6 174.999 592.5 176.899C594.4 178.799 596.7 180.299 599.3 181.299C601.9 182.299 604.7 182.799 607.6 182.799C610.5 182.799 613.2 182.299 615.8 181.299C618.4 180.199 620.7 178.699 622.7 176.899C624.7 174.999 626.3 172.799 627.4 170.199C628.5 167.599 629.1 164.899 629.1 161.799C629.1 158.699 628.5 155.999 627.4 153.399C626.3 150.799 624.7 148.599 622.7 146.699C620.8 144.799 618.5 143.399 615.8 142.399C613.2 141.299 610.5 140.799 607.6 140.799C604.7 140.799 602 141.299 599.3 142.399C596.7 143.399 594.5 144.899 592.5 146.699C590.6 148.599 589 150.799 587.9 153.399C586.8 155.999 586.2 158.799 586.2 161.799ZM565.6 161.799C565.6 156.199 566.6 150.899 568.7 146.099C570.8 141.199 573.7 136.899 577.4 133.299C581.1 129.699 585.5 126.799 590.6 124.799C595.8 122.699 601.5 121.699 607.6 121.699C613.7 121.699 619.4 122.699 624.5 124.799C629.7 126.799 634.1 129.599 637.8 133.299C641.6 136.899 644.5 141.199 646.6 146.099C648.7 150.899 649.7 156.199 649.7 161.799C649.7 167.399 648.7 172.699 646.6 177.599C644.5 182.399 641.6 186.699 637.8 190.299C634.1 193.899 629.7 196.799 624.5 198.899C619.3 200.899 613.7 201.899 607.6 201.899C601.4 201.899 595.7 200.899 590.6 198.899C585.5 196.799 581.1 193.999 577.4 190.299C573.7 186.699 570.8 182.399 568.7 177.599C566.6 172.699 565.6 167.499 565.6 161.799ZM691 121.799V201.799H670V121.799H691ZM397 121.799V201.799H376V121.799H397ZM713 201.799V121.799H733L772 170.699V121.799H793V201.799H772.8L734 152.899V201.799H713Z"
          fill="#0E0333"
        />
        <path
          d="M209.678 163.683C209.678 175.186 206.312 186.437 199.996 196.047L213.674 207.292C222.623 194.518 227.409 179.286 227.378 163.683C227.373 148.523 222.888 133.703 214.489 121.09L200.268 131.843C206.124 140.965 209.678 152.027 209.678 163.683Z"
          fill="#02E2AC"
        />
        <path
          d="M224.783 215.451C215.461 207.751 183.189 182.011 178.907 178.593C181.339 174.002 182.59 168.88 182.55 163.686C182.509 158.492 181.177 153.389 178.673 148.837L214.587 121.7L225.077 113.193C227.655 111.477 228.076 109.575 226.203 107.111C223.763 103.901 221.12 100.85 218.29 97.9768C203.181 82.627 182.827 72.4405 160.132 70.2973V52.2651C160.132 47.4943 156.528 43.3285 151.762 43.0198C150.536 42.9383 149.307 43.109 148.151 43.5213C146.994 43.9336 145.935 44.5788 145.038 45.4169C144.141 46.2549 143.426 47.268 142.937 48.3934C142.449 49.5187 142.196 50.7324 142.196 51.9591V70.3055C134.549 71.0271 127.019 72.6861 119.777 75.2451V52.2651C119.777 47.4943 116.173 43.3285 111.407 43.0198C110.182 42.9383 108.953 43.109 107.797 43.5213C106.64 43.9336 105.581 44.5788 104.684 45.4169C103.787 46.255 103.073 47.2681 102.584 48.3935C102.095 49.5188 101.843 50.7324 101.843 51.9591V83.8084C75.139 100.241 57.2707 129.611 57.0029 163.174C56.5908 215.326 100.099 258 152.308 258H222.004C223.275 257.999 224.505 257.549 225.475 256.729C226.445 255.909 227.094 254.772 227.305 253.52L227.377 220.985C227.381 219.928 227.15 218.884 226.701 217.927C226.253 216.97 225.598 216.125 224.783 215.451V215.451ZM209.545 226.931L209.45 240.083H152.102C109.968 240.083 74.7297 205.643 74.9371 163.555C75.0498 140.452 85.4762 119.793 101.839 105.903V123.318C101.839 128.09 105.443 132.256 110.209 132.565C111.435 132.646 112.663 132.475 113.82 132.063C114.976 131.65 116.036 131.005 116.932 130.167C117.829 129.329 118.544 128.316 119.032 127.191C119.521 126.066 119.773 124.852 119.773 123.626V94.5506C129.634 90.088 140.335 87.7835 151.16 87.7916C171.214 87.7916 188.108 94.4367 201.718 107.081L165.108 135.85C160.775 133.696 156 132.579 151.16 132.584C133.826 132.584 119.773 146.621 119.773 163.938C119.773 181.255 133.826 195.292 151.16 195.292C156.075 195.296 160.923 194.141 165.307 191.922L209.545 226.931ZM164.612 163.938C164.612 166.596 163.823 169.194 162.345 171.404C160.867 173.614 158.766 175.336 156.308 176.353C153.85 177.371 151.145 177.637 148.536 177.118C145.926 176.6 143.529 175.32 141.648 173.44C139.766 171.561 138.485 169.167 137.966 166.56C137.447 163.953 137.713 161.251 138.732 158.795C139.75 156.34 141.474 154.241 143.686 152.764C145.898 151.288 148.499 150.5 151.16 150.5C154.728 150.5 158.149 151.915 160.672 154.436C163.195 156.956 164.612 160.374 164.612 163.938Z"
          fill="#0E0333"
        />
      </svg>
      */
      <svg width="151" height="69" viewBox="0 0 450 311" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M217.678 163.683C217.678 175.186 214.312 186.437 207.996 196.047L221.674 207.292C230.623 194.518 235.409 179.286 235.378 163.683C235.373 148.523 230.888 133.703 222.489 121.09L208.268 131.843C214.124 140.965 217.678 152.027 217.678 163.683Z" fill="#02E2AC"/>
      <path d="M232.783 215.451C223.461 207.751 191.189 182.011 186.907 178.593C189.339 174.002 190.59 168.88 190.55 163.686C190.509 158.492 189.177 153.389 186.673 148.837L222.587 121.7L233.077 113.193C235.655 111.477 236.076 109.575 234.203 107.111C231.763 103.901 229.12 100.85 226.29 97.9768C211.181 82.627 190.827 72.4405 168.132 70.2973V52.2651C168.132 47.4943 164.528 43.3285 159.762 43.0198C158.536 42.9383 157.307 43.109 156.151 43.5213C154.994 43.9336 153.935 44.5788 153.038 45.4169C152.141 46.2549 151.426 47.268 150.937 48.3934C150.449 49.5187 150.196 50.7324 150.196 51.9591V70.3055C142.549 71.0271 135.019 72.6861 127.777 75.2451V52.2651C127.777 47.4943 124.173 43.3285 119.407 43.0198C118.182 42.9383 116.953 43.109 115.797 43.5213C114.64 43.9336 113.581 44.5788 112.684 45.4169C111.787 46.255 111.073 47.2681 110.584 48.3935C110.095 49.5188 109.843 50.7324 109.843 51.9591V83.8084C83.139 100.241 65.2707 129.611 65.0029 163.174C64.5908 215.326 108.099 258 160.308 258H230.004C231.275 257.999 232.505 257.549 233.475 256.729C234.445 255.909 235.094 254.772 235.305 253.52L235.377 220.985C235.381 219.928 235.15 218.884 234.701 217.927C234.253 216.97 233.598 216.125 232.783 215.451V215.451ZM217.545 226.931L217.45 240.083H160.102C117.968 240.083 82.7297 205.643 82.9371 163.555C83.0498 140.452 93.4762 119.793 109.839 105.903V123.318C109.839 128.09 113.443 132.256 118.209 132.565C119.435 132.646 120.663 132.475 121.82 132.063C122.976 131.65 124.036 131.005 124.932 130.167C125.829 129.329 126.544 128.316 127.032 127.191C127.521 126.066 127.773 124.852 127.773 123.626V94.5506C137.634 90.088 148.335 87.7835 159.16 87.7916C179.214 87.7916 196.108 94.4367 209.718 107.081L173.108 135.85C168.775 133.696 164 132.579 159.16 132.584C141.826 132.584 127.773 146.621 127.773 163.938C127.773 181.255 141.826 195.292 159.16 195.292C164.075 195.296 168.923 194.141 173.307 191.922L217.545 226.931ZM172.612 163.938C172.612 166.596 171.823 169.194 170.345 171.404C168.867 173.614 166.766 175.336 164.308 176.353C161.85 177.371 159.145 177.637 156.536 177.118C153.926 176.6 151.529 175.32 149.648 173.44C147.766 171.561 146.485 169.167 145.966 166.56C145.447 163.953 145.713 161.251 146.732 158.795C147.75 156.34 149.474 154.241 151.686 152.764C153.898 151.288 156.499 150.5 159.16 150.5C162.728 150.5 166.149 151.915 168.672 154.436C171.195 156.956 172.612 160.374 172.612 163.938Z" fill="#0E0333"/>
      </svg>      
    ),
    [ id]
  );

  if (!isLink) return markup;
  return (
    <Link href="/" passHref>
      <a aria-label="logo">{markup}</a>
    </Link>
  );
};

export default GitcoinLogo;
