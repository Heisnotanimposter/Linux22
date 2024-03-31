{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyMVGNVLOB8ghrfkSOBO+l//",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/Heisnotanimposter/Linux22/blob/main/How_to_Use_SIGUSR1.c\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "pBpA4De7qS-H"
      },
      "outputs": [],
      "source": [
        "#include <signal.h>\n",
        "#include <stdio.h>\n",
        "#include <unistd.h>\n",
        "\n",
        "void sigusr1_detector(int signum) {\n",
        "    printf(\"Detected\");\n",
        "}\n",
        "\n",
        "int main(void) {\n",
        "    signal(SIGUSR1, sigusr1_detector);\n",
        "    int i;\n",
        "    for (i = 0; i < 30; i++) {\n",
        "        printf(\"Iteration\", i + 1);\n",
        "        sleep(1);\n",
        "    }\n",
        "    return 0;\n",
        "}\n",
        "\n",
        "\n",
        "//Bash : kill -SIGUSR1 pid\n",
        "//Bash1 : kill -USR1 pid\n"
      ]
    }
  ]
}