import { AvatarComponent } from '@rainbow-me/rainbowkit';


export const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {

    return ensImage ? (
        <img
            src={ensImage}
            width={size}
            height={size}
            style={{ borderRadius: 999 }}
        />
    ) : (
        <div
            style={{

                borderRadius: 999,
                height: size,
                width: size,
            }}
        >
            💫
        </div>
    );
};