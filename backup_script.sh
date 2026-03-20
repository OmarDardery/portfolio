#!/bin/bash
# Replace '192.168.1.100' with the actual local IP from Proxmox
NAS_IP="192.168.1.16" 

sudo mkdir -p /mnt/nas

echo "Connecting to Proxmox NAS via Local IP..."
sudo mount -t cifs -o username=admin,password=openmediavault,vers=3.0 //$NAS_IP/Backups /mnt/nas

if mountpoint -q /mnt/nas; then
    echo "✅ Local NAS Connected. Starting backup..."
    tar -cpzf /mnt/nas/configs_$(date +%Y%m%d).tar.gz \
        --exclude='.cache' \
        --exclude='Downloads' \
        -C ~ .config .ssh .zshrc .local/share/niri
    echo "🎉 Backup complete!"
else
    echo "❌ ERROR: Could not connect to $NAS_IP."
    exit 1
fi
