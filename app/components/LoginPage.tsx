"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { data1, data2, data3 } from "../../public/data";

const Login: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(90deg, #2C9CE2 0%, #BFADF2 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "574px",
          height: "574px",
          background: "#FFF",
          borderRadius: "50%",
          top: "726px",
          left: "-106px",
          filter: "blur(200px)",
          [theme.breakpoints.down("sm")]: {
            width: "300px",
            height: "300px",
            top: "30%",
            left: "-50%",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "117px",
          height: "40px",
          top: "57px",
          left: "80px",
          [theme.breakpoints.down("sm")]: {
            top: "20px",
            left: "20px",
          },
        }}
      >
        <svg
          width="161"
          height="27"
          viewBox="0 0 161 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140.613 1.73997C140.453 1.33997 140.448 0.999973 140.598 0.719973C140.758 0.429973 141.103 0.284973 141.633 0.284973H145.338C145.588 0.284973 145.793 0.364973 145.953 0.524972C146.113 0.674973 146.233 0.864974 146.313 1.09497L150.558 13.17L154.713 1.09497C154.823 0.774973 154.963 0.559973 155.133 0.449972C155.303 0.339973 155.538 0.284973 155.838 0.284973H159.693C159.973 0.284973 160.193 0.324974 160.353 0.404974C160.513 0.474974 160.623 0.574973 160.683 0.704973C160.753 0.824973 160.778 0.964973 160.758 1.12497C160.738 1.27497 160.698 1.42497 160.638 1.57497C160.258 2.51497 159.843 3.54497 159.393 4.66497C158.943 5.77497 158.473 6.93497 157.983 8.14497C157.503 9.34497 157.013 10.57 156.513 11.82C156.013 13.06 155.523 14.28 155.043 15.48C154.573 16.68 154.118 17.835 153.678 18.945C153.238 20.045 152.833 21.055 152.463 21.975C152.103 22.905 151.788 23.72 151.518 24.42C151.248 25.12 151.043 25.66 150.903 26.04L150.948 25.965C150.878 26.235 150.753 26.45 150.573 26.61C150.393 26.78 150.173 26.865 149.913 26.865H146.448C145.998 26.865 145.688 26.775 145.518 26.595C145.358 26.425 145.278 26.17 145.278 25.83C145.278 25.7 145.293 25.6 145.323 25.53C145.363 25.46 145.393 25.415 145.413 25.395L147.768 19.275L140.613 1.73997Z"
            fill="white"
          />
          <path
            d="M124.512 1.41C124.512 1.22 124.547 1.055 124.617 0.915C124.687 0.775001 124.777 0.66 124.887 0.57C125.007 0.48 125.137 0.415001 125.277 0.375C125.427 0.325 125.572 0.3 125.712 0.3H127.977C128.227 0.3 128.427 0.375 128.577 0.525C128.727 0.675001 128.852 0.865001 128.952 1.095C129.062 1.325 129.157 1.58 129.237 1.86C129.317 2.14 129.412 2.41 129.522 2.67C129.822 2.34 130.117 2.015 130.407 1.695C130.707 1.375 131.027 1.09 131.367 0.84C131.707 0.59 132.077 0.390001 132.477 0.240001C132.887 0.0800004 133.352 0 133.872 0C134.412 0 134.892 0.0399997 135.312 0.12C135.742 0.2 136.147 0.320001 136.527 0.480001C136.907 0.630001 137.282 0.825 137.652 1.065C138.032 1.305 138.442 1.585 138.882 1.905C139.312 2.155 139.527 2.45 139.527 2.79C139.527 3.01 139.442 3.265 139.272 3.555L137.907 5.88C137.637 6.27 137.302 6.465 136.902 6.465C136.702 6.465 136.477 6.41 136.227 6.3C135.797 5.88 135.357 5.57 134.907 5.37C134.467 5.16 133.962 5.055 133.392 5.055C133.002 5.055 132.657 5.11 132.357 5.22C132.067 5.33 131.802 5.485 131.562 5.685C131.322 5.885 131.097 6.125 130.887 6.405C130.677 6.685 130.467 6.995 130.257 7.335V18.195C130.257 18.575 130.162 18.865 129.972 19.065C129.792 19.255 129.487 19.35 129.057 19.35H125.682C124.902 19.35 124.512 18.965 124.512 18.195V1.41Z"
            fill="white"
          />
          <path
            d="M101.837 9.84C101.837 8.92 101.952 8.035 102.182 7.185C102.422 6.335 102.752 5.55 103.172 4.83C103.602 4.1 104.112 3.44 104.702 2.85C105.302 2.25 105.967 1.74 106.697 1.32C107.427 0.9 108.212 0.575 109.052 0.345C109.902 0.115 110.787 0 111.707 0C113.067 0 114.342 0.255 115.532 0.765C116.732 1.265 117.772 1.96 118.652 2.85C119.542 3.73 120.242 4.77 120.752 5.97C121.272 7.16 121.532 8.45 121.532 9.84C121.532 10.76 121.412 11.645 121.172 12.495C120.942 13.335 120.612 14.12 120.182 14.85C119.762 15.58 119.252 16.245 118.652 16.845C118.062 17.435 117.402 17.945 116.672 18.375C115.942 18.795 115.157 19.12 114.317 19.35C113.487 19.58 112.617 19.695 111.707 19.695C110.787 19.695 109.902 19.58 109.052 19.35C108.212 19.12 107.427 18.795 106.697 18.375C105.967 17.945 105.302 17.435 104.702 16.845C104.112 16.245 103.602 15.58 103.172 14.85C102.752 14.12 102.422 13.335 102.182 12.495C101.952 11.645 101.837 10.76 101.837 9.84ZM107.312 9.84C107.312 10.5 107.412 11.12 107.612 11.7C107.822 12.27 108.112 12.765 108.482 13.185C108.862 13.605 109.317 13.94 109.847 14.19C110.387 14.43 110.992 14.55 111.662 14.55C112.312 14.55 112.897 14.43 113.417 14.19C113.947 13.94 114.392 13.605 114.752 13.185C115.122 12.765 115.402 12.27 115.592 11.7C115.792 11.12 115.892 10.5 115.892 9.84C115.892 9.2 115.792 8.59 115.592 8.01C115.402 7.43 115.122 6.92 114.752 6.48C114.392 6.04 113.947 5.695 113.417 5.445C112.897 5.185 112.312 5.055 111.662 5.055C110.992 5.055 110.387 5.185 109.847 5.445C109.317 5.695 108.862 6.04 108.482 6.48C108.112 6.92 107.822 7.43 107.612 8.01C107.412 8.59 107.312 9.2 107.312 9.84Z"
            fill="white"
          />
          <path
            d="M70.849 0.555001C70.979 0.445001 71.114 0.375 71.254 0.345C71.404 0.315 71.544 0.3 71.674 0.3H73.939C74.119 0.3 74.274 0.335001 74.404 0.405002C74.534 0.465001 74.644 0.55 74.734 0.660001C74.824 0.770001 74.894 0.895 74.944 1.035C75.004 1.175 75.059 1.32 75.109 1.47L75.424 2.79C75.574 2.48 75.789 2.16 76.069 1.83C76.349 1.5 76.704 1.2 77.134 0.93C77.564 0.66 78.074 0.44 78.664 0.27C79.264 0.0900004 79.964 0 80.764 0C81.394 0 81.964 0.0650005 82.474 0.195001C82.994 0.315 83.464 0.5 83.884 0.750001C84.314 0.99 84.704 1.29 85.054 1.65C85.404 2 85.734 2.405 86.044 2.865C86.234 2.555 86.514 2.23 86.884 1.89C87.264 1.55 87.714 1.24 88.234 0.96C88.754 0.68 89.334 0.450001 89.974 0.27C90.614 0.0900004 91.294 0 92.014 0C93.154 0 94.149 0.220001 94.999 0.660001C95.849 1.1 96.554 1.7 97.114 2.46C97.684 3.22 98.109 4.11 98.389 5.13C98.669 6.14 98.809 7.22 98.809 8.37V18.195C98.809 18.575 98.724 18.865 98.554 19.065C98.394 19.255 98.134 19.35 97.774 19.35H94.309C93.879 19.35 93.584 19.28 93.424 19.14C93.264 18.99 93.184 18.705 93.184 18.285V8.37C93.184 7.94 93.114 7.54 92.974 7.17C92.844 6.8 92.659 6.48 92.419 6.21C92.179 5.93 91.884 5.715 91.534 5.565C91.194 5.405 90.814 5.325 90.394 5.325C90.014 5.325 89.654 5.4 89.314 5.55C88.974 5.7 88.674 5.91 88.414 6.18C88.154 6.44 87.944 6.76 87.784 7.14C87.634 7.51 87.559 7.92 87.559 8.37V18.195C87.559 18.575 87.474 18.865 87.304 19.065C87.144 19.255 86.884 19.35 86.524 19.35H86.209H86.089H83.059C82.629 19.35 82.334 19.28 82.174 19.14C82.014 18.99 81.934 18.705 81.934 18.285V8.37C81.934 7.94 81.869 7.54 81.739 7.17C81.619 6.8 81.439 6.48 81.199 6.21C80.969 5.93 80.684 5.715 80.344 5.565C80.014 5.405 79.639 5.325 79.219 5.325C78.859 5.325 78.504 5.4 78.154 5.55C77.814 5.69 77.504 5.895 77.224 6.165C76.954 6.425 76.724 6.74 76.534 7.11C76.354 7.48 76.249 7.89 76.219 8.34V18.24C76.219 18.41 76.184 18.58 76.114 18.75C76.054 18.92 75.959 19.05 75.829 19.14C75.699 19.22 75.574 19.275 75.454 19.305C75.344 19.335 75.214 19.35 75.064 19.35H71.674C71.244 19.35 70.934 19.245 70.744 19.035C70.554 18.825 70.459 18.545 70.459 18.195V1.41C70.459 1.22 70.499 1.045 70.579 0.885C70.669 0.725 70.789 0.600001 70.939 0.510001L70.849 0.555001Z"
            fill="white"
          />
          <path
            d="M53.2031 1.41C53.2031 1.22 53.2381 1.055 53.3081 0.915C53.3781 0.775001 53.4681 0.66 53.5781 0.57C53.6981 0.48 53.8281 0.415001 53.9681 0.375C54.1181 0.325 54.2631 0.3 54.4031 0.3H56.6681C56.9181 0.3 57.1181 0.375 57.2681 0.525C57.4181 0.675001 57.5431 0.865001 57.6431 1.095C57.7531 1.325 57.8481 1.58 57.9281 1.86C58.0081 2.14 58.1031 2.41 58.2131 2.67C58.5131 2.34 58.8081 2.015 59.0981 1.695C59.3981 1.375 59.7181 1.09 60.0581 0.84C60.3981 0.59 60.7681 0.390001 61.1681 0.240001C61.5781 0.0800004 62.0431 0 62.5631 0C63.1031 0 63.5831 0.0399997 64.0031 0.12C64.4331 0.2 64.8381 0.320001 65.2181 0.480001C65.5981 0.630001 65.9731 0.825 66.3431 1.065C66.7231 1.305 67.1331 1.585 67.5731 1.905C68.0031 2.155 68.2181 2.45 68.2181 2.79C68.2181 3.01 68.1331 3.265 67.9631 3.555L66.5981 5.88C66.3281 6.27 65.9931 6.465 65.5931 6.465C65.3931 6.465 65.1681 6.41 64.9181 6.3C64.4881 5.88 64.0481 5.57 63.5981 5.37C63.1581 5.16 62.6531 5.055 62.0831 5.055C61.6931 5.055 61.3481 5.11 61.0481 5.22C60.7581 5.33 60.4931 5.485 60.2531 5.685C60.0131 5.885 59.7881 6.125 59.5781 6.405C59.3681 6.685 59.1581 6.995 58.9481 7.335V18.195C58.9481 18.575 58.8531 18.865 58.6631 19.065C58.4831 19.255 58.1781 19.35 57.7481 19.35H54.3731C53.5931 19.35 53.2031 18.965 53.2031 18.195V1.41Z"
            fill="white"
          />
          <path
            d="M47.9229 17.07C47.0429 17.88 46.0529 18.515 44.9529 18.975C43.8529 19.425 42.6879 19.65 41.4579 19.65C40.0879 19.65 38.7929 19.4 37.5729 18.9C36.3529 18.4 35.2829 17.71 34.3629 16.83C33.4429 15.94 32.7129 14.895 32.1729 13.695C31.6329 12.495 31.3629 11.19 31.3629 9.78C31.3629 8.9 31.4679 8.05 31.6779 7.23C31.8979 6.4 32.2029 5.625 32.5929 4.905C32.9929 4.185 33.4729 3.525 34.0329 2.925C34.6029 2.315 35.2379 1.795 35.9379 1.365C36.6379 0.935001 37.3979 0.6 38.2179 0.360001C39.0379 0.12 39.9029 0 40.8129 0C41.6429 0 42.4479 0.11 43.2279 0.330001C44.0079 0.55 44.7379 0.860001 45.4179 1.26C46.1079 1.66 46.7379 2.14 47.3079 2.7C47.8779 3.26 48.3679 3.875 48.7779 4.545C49.1879 5.205 49.5029 5.915 49.7229 6.675C49.9529 7.425 50.0679 8.2 50.0679 9C50.0679 9.52 50.0579 9.945 50.0379 10.275C50.0279 10.605 49.9529 10.87 49.8129 11.07C49.6729 11.26 49.4379 11.395 49.1079 11.475C48.7879 11.545 48.3129 11.58 47.6829 11.58H36.8829C36.9829 12.22 37.1829 12.755 37.4829 13.185C37.7929 13.615 38.1479 13.96 38.5479 14.22C38.9479 14.47 39.3729 14.65 39.8229 14.76C40.2729 14.87 40.6979 14.925 41.0979 14.925C41.4579 14.925 41.8279 14.89 42.2079 14.82C42.5879 14.74 42.9529 14.64 43.3029 14.52C43.6629 14.39 43.9879 14.245 44.2779 14.085C44.5779 13.915 44.8179 13.74 44.9979 13.56C45.1579 13.43 45.2929 13.335 45.4029 13.275C45.5229 13.205 45.6479 13.17 45.7779 13.17C45.9079 13.17 46.0379 13.215 46.1679 13.305C46.3079 13.395 46.4629 13.525 46.6329 13.695L48.2229 15.495C48.3329 15.625 48.4029 15.745 48.4329 15.855C48.4629 15.955 48.4779 16.06 48.4779 16.17C48.4779 16.37 48.4229 16.545 48.3129 16.695C48.2029 16.835 48.0729 16.96 47.9229 17.07ZM40.7079 4.575C40.3179 4.575 39.9379 4.655 39.5679 4.815C39.2079 4.965 38.8679 5.17 38.5479 5.43C38.2279 5.69 37.9379 5.985 37.6779 6.315C37.4279 6.645 37.2229 6.98 37.0629 7.32H44.7279C44.5179 6.93 44.2879 6.57 44.0379 6.24C43.7979 5.91 43.5179 5.62 43.1979 5.37C42.8879 5.12 42.5279 4.925 42.1179 4.785C41.7179 4.645 41.2479 4.575 40.7079 4.575Z"
            fill="white"
          />
          <path
            d="M0.39 0.555001C0.52 0.445001 0.655 0.375 0.795 0.345C0.945 0.315 1.085 0.3 1.215 0.3H3.48C3.66 0.3 3.815 0.335001 3.945 0.405002C4.075 0.465001 4.185 0.55 4.275 0.660001C4.365 0.770001 4.435 0.895 4.485 1.035C4.545 1.175 4.6 1.32 4.65 1.47L4.965 2.79C5.115 2.48 5.33 2.16 5.61 1.83C5.89 1.5 6.245 1.2 6.675 0.93C7.105 0.66 7.615 0.44 8.205 0.27C8.805 0.0900004 9.505 0 10.305 0C10.935 0 11.505 0.0650005 12.015 0.195001C12.535 0.315 13.005 0.5 13.425 0.750001C13.855 0.99 14.245 1.29 14.595 1.65C14.945 2 15.275 2.405 15.585 2.865C15.775 2.555 16.055 2.23 16.425 1.89C16.805 1.55 17.255 1.24 17.775 0.96C18.295 0.68 18.875 0.450001 19.515 0.27C20.155 0.0900004 20.835 0 21.555 0C22.695 0 23.69 0.220001 24.54 0.660001C25.39 1.1 26.095 1.7 26.655 2.46C27.225 3.22 27.65 4.11 27.93 5.13C28.21 6.14 28.35 7.22 28.35 8.37V18.195C28.35 18.575 28.265 18.865 28.095 19.065C27.935 19.255 27.675 19.35 27.315 19.35H23.85C23.42 19.35 23.125 19.28 22.965 19.14C22.805 18.99 22.725 18.705 22.725 18.285V8.37C22.725 7.94 22.655 7.54 22.515 7.17C22.385 6.8 22.2 6.48 21.96 6.21C21.72 5.93 21.425 5.715 21.075 5.565C20.735 5.405 20.355 5.325 19.935 5.325C19.555 5.325 19.195 5.4 18.855 5.55C18.515 5.7 18.215 5.91 17.955 6.18C17.695 6.44 17.485 6.76 17.325 7.14C17.175 7.51 17.1 7.92 17.1 8.37V18.195C17.1 18.575 17.015 18.865 16.845 19.065C16.685 19.255 16.425 19.35 16.065 19.35H15.75H15.63H12.6C12.17 19.35 11.875 19.28 11.715 19.14C11.555 18.99 11.475 18.705 11.475 18.285V8.37C11.475 7.94 11.41 7.54 11.28 7.17C11.16 6.8 10.98 6.48 10.74 6.21C10.51 5.93 10.225 5.715 9.885 5.565C9.555 5.405 9.18 5.325 8.76 5.325C8.4 5.325 8.045 5.4 7.695 5.55C7.355 5.69 7.045 5.895 6.765 6.165C6.495 6.425 6.265 6.74 6.075 7.11C5.895 7.48 5.79 7.89 5.76 8.34V18.24C5.76 18.41 5.725 18.58 5.655 18.75C5.595 18.92 5.5 19.05 5.37 19.14C5.24 19.22 5.115 19.275 4.995 19.305C4.885 19.335 4.755 19.35 4.605 19.35H1.215C0.785 19.35 0.475 19.245 0.285 19.035C0.0950001 18.825 0 18.545 0 18.195V1.41C0 1.22 0.04 1.045 0.12 0.885C0.21 0.725 0.33 0.600001 0.48 0.510001L0.39 0.555001Z"
            fill="white"
          />
        </svg>
      </Box>

      <Container
        component={Paper}
        elevation={3}
        sx={{
          position: "absolute",
          textAlign: "center",
          py: "40px",
          px: "0",
          width: isMobile ? "90%" : "556px",
          height: isMobile ? "auto" : "auto",
          top: isTablet ? "50%" : isMobile ? "70px" : "122px",
          left: isTablet ? "50%" : isMobile ? "5%" : "70px",
          transform: isTablet ? "translate(-50%, -50%)" : "none",
          gap: "10px",
          borderRadius: "24px",
          backgroundColor: "white",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
          [theme.breakpoints.between(900, 1280)]: {
            maxWidth: "470px", // Slightly smaller width
            // Adjust rotation
          },
        }}
      >
        <Container
          // component={div}
          sx={{
            height: "auto",
            gap: "16px",
            maxWidth: "476px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#001F2E",
              fontSize: isMobile ? "28px" : "36px",
              mb: "24px",
              fontFamily: "'Figtree', sans-serif",
            }}
            fontWeight="600"
          >
            Welcome Back!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#5E7078",
              fontSize: "16px",
              fontFamily: "'Figtree', sans-serif",
            }}
          >
            Don&apos;t have an account?{" "}
            <span className="text-blue-600">
              <a href="#">Sign up</a>
            </span>
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              height: "114px",
              gap: "12px",
            }}
          >
            {[
              {
                icon: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
                text: "Log in with Google",
              },
              {
                icon: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
                text: "Log in with Apple",
              },
              {
                icon: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
                text: "Log in with Facebook",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  minHeight: "40px",
                  borderRadius: "8px",
                  border: "2px solid #E6E8EA",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  gap: "8px",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #2C9CE2 0%, #BFADF2 100%)", // Linear gradient on hover
                    "& .text": {
                      color: "#FFFFFF", // Change text color on hover
                    },
                  },
                }}
              >
                <img
                  src={item.icon}
                  alt={`${item.text} Icon`}
                  width={24}
                  height={24}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#001F2E", // Initial text color
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontFamily: "Figtree, sans-serif",
                  }}
                  className="text"
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              minHeight: "18px",
              mt: "40px",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Divider>
              <span className="font-figtree font-normal text-[12px] leading-[18px] text-[#5E7078]">
                OR
              </span>
            </Divider>
          </Box>

          <Box component="div" sx={{ minHeight: "184px" }}>
            <p className="text-[#5E7078] font-figtree text-left text-[14px] mb-[8px] font-[600]">
              Email<span className="text-red-700">*</span>
            </p>
            <input
              placeholder="Enter your email"
              type="text"
              className="w-full rounded-lg placeholder:font-figtree placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[20px] bg-[#F8F9F9] min-h-[40px] border-2 border-[#E6E8EA] py-[10px] px-[6px] focus:border-transparent focus:outline-none focus:border-image focus:border-image-source-[linear-gradient(90deg,#2C9CE2,#BFADF2)] focus:border-image-slice-[1]"
            />

            <Box
              sx={{
                gap: "auto",
                display: "flex",
                marginTop: "8px",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "auto",
              }}
            >
              <p className="text-[#5E7078] font-figtree my-[8px] leading-[16.8px] text-[14px] font-[600]">
                Password<span className="text-red-700">*</span>
              </p>
              <a
                className="text-[#007CB5] font-figtree my-[8px] leading-[16.8px] text-[14px] font-[400]"
                href="#"
              >
                Forgot password?
              </a>
            </Box>
            <input
              placeholder="Enter your email"
              type="text"
              className="w-full rounded-lg placeholder:font-figtree placeholder:font-[400] placeholder:text-[14px] placeholder:leading-[20px] bg-[#F8F9F9] min-h-[40px] border-2 border-[#E6E8EA] py-[10px] px-[6px] focus:border-transparent focus:outline-none focus:border-image focus:border-image-source-[linear-gradient(90deg,#2C9CE2,#BFADF2)] focus:border-image-slice-[1]"
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: isMobile ? "100%" : "280px",
              gap: "16px",
              background: "#007CB5",
              boxShadow: "none",
              borderRadius: "24px",
              mt: 2,
              "&:hover": {
                background: "linear-gradient(90deg, #2C9CE2 0%, #BFADF2 100%)",
              },
            }}
          >
            <span className="min-w-[56px] min-h-[20] text-[18px] font-figtree capitalize font-normal leading-[20px]">
              Sign In
            </span>
          </Button>
          <Typography
            variant="caption"
            sx={{ mt: 2, display: "block" }}
          ></Typography>
          <p className="mt-2 block text-[14px] font-figtree leading-[16.8px] text-[#5E7078] font-sm">
            By continuing, you agree to our{" "}
            <a href="#" className="text-[#007CB5] font-figtree">
              User Agreement
            </a>{" "}<br/>
            and acknowledge our{" "}
            <a href="#" className="text-[#007CB5] font-figtree">
              Privacy Policy
            </a>
            .
          </p>
        </Container>
      </Container>
      <Container
        component="div"
        sx={{
          position: "absolute",
          display: isTablet ? "none" : "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "1421.56px",
          minWidth: "900px",
          top: "7.49",
          left: "798px",
          gap: "24px",
          transform: "rotate(-7deg)",
          overflow: "hidden",
          [theme.breakpoints.between(900, 1280)]: {
            left: "560px",
            maxWidth: "700px",
            transform: "rotate(-5deg)",
          },
          [theme.breakpoints.between(1280, 1580)]: {
            left: "650px",
            maxWidth: "700px",
            transform: "rotate(-7deg)",
          },
        }}
      >
        {[data1, data2, data3].map((data, index) => {
          const speedMultiplier = index === 1 ? 7 : 10;
          const duplicatedData = [...data, ...data];

          return (
            <Box
              key={index}
              sx={{
                position: "relative",
                maxWidth: "320px",
                height: "1262.92px",
                overflow: "hidden",
                gap: "14.24px",
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.between(900, 1280)]: {
                  maxWidth: "200px",
                  transform: "rotate(-5deg)",
                },
              }}
            >
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: duplicatedData.length * speedMultiplier,
                  ease: "linear",
                }}
                className="flex flex-col"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  height: "auto",
                }}
              >
                {duplicatedData.map((item, i) => (
                  <div key={`${item.id}-${i}`} className="w-full marquee-item">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-auto object-fit"
                    />
                  </div>
                ))}
              </motion.div>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Login;
